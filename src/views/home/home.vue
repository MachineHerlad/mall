<template>
  <div id="home">
    <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    <TabControl class="tab-control"
                :titles="['流行','新款', '精选']"
                @tabClick = "tabClick"
                ref="tabControl1" v-show="isTabFixed"></TabControl>

    <Scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentShow"
            :pull-up-load="true"
            @pullingUp="loadMore">
    <HomeSwiper :banner = "banner" @imgload="swiperImgload"></HomeSwiper>
      <recommendsView :recommends="recommends"></recommendsView>
      <featureView></featureView>
      <TabControl :titles="['流行','新款', '精选']"
                  @tabClick = "tabClick"
                  ref="tabControl2"
                  :class="{fixed: isTabFixed}"></TabControl>
      <GoodsList :goods = "showType"></GoodsList>
    </Scroll>

    <BackTop @click.native="TopClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>

  import HomeSwiper from "./ChildComps/HomeSwiper";
  import recommendsView from "./ChildComps/recommendsView";
  import featureView from "./ChildComps/featureView"
  import GoodsList from "components/content/Goods/GoodsList";

  import Navbar from "components/common/navbar/Navbar.vue";
  import TabControl from "components/content/TabControl";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getHomeMultidata, getHomeGoods} from "../../network/Home";
  import { itemListenerMinxi,  isShowBackTop } from 'common/mixin.js'



  export default {
    name:"Home",
    components: {
      Navbar,
      HomeSwiper,
      recommendsView,
      featureView,
      TabControl,
      GoodsList,
      Scroll,
    },
    data(){
      return {
        banner:[],
        recommends:[],
        goods:{
          'pop':{ page: 0, list:[]},
          'new':{ page: 0, list:[]},
          'sell':{ page: 0, list:[]},
        },
        currentType: 'pop',
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0,
      }
    },
    mixins: [itemListenerMinxi, isShowBackTop],
    created() {
      this.getHomeMultidata()

      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //1.保存y值
      this.saveY = this.$refs.scroll.getScrollY;

      //2.取消全局事件的监听
      this.$bus.$off('ItemimageLoad', this.itemImgListener)
    },
    mounted() {

    },
    computed: {
      showType(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      getHomeMultidata() {
        getHomeMultidata().then( res => {
          this.banner = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        const page = this.goods[type].page +1
        getHomeGoods(type, page).then( res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      },
      TopClick() {
        this.$refs.scroll.scrollTo(0,0)
      },

      tabClick(index) {
          switch(index) {
            case 0: this.currentType = 'pop'
                  break
            case 1: this.currentType = 'new'
              break
            case 2: this.currentType = 'sell'
              break
          }
          this.$refs.tabControl1.currentIndex = index;
          this.$refs.tabControl2.currentIndex = index;
      },
      contentShow( position ){
      //1.判断BackTop是否显示
        this.demo(position)

        //2.判断tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore() {
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.refresh()
      },
      swiperImgload(){
         this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
    padding-top: 44px;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint) ;
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

    font-weight: 600;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }
</style>

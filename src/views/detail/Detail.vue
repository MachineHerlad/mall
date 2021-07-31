<template>
  <div id="detail">
  <DetailNavBar class="detail-nav" @itemClick="itemClick" ref="nav"></DetailNavBar>
  <Scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
    <ul>
      <li v-for="item in $store.state.cartList"> {{ item }}</li>
    </ul>
    <detail-swiper :images="topImages"></detail-swiper>
    <detailbase-info :goods="Goods"></detailbase-info>
    <DetailShopInfo :shop="shops"></DetailShopInfo>
    <detail-goods-info :imagesInfo="detailInfo" @imgload="imgload"/>
    <detail-param-info :param-info="paramsInfo" ref="param"></detail-param-info>
    <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
    <goods-list :goods="recommendInfo" ref="recommend"></goods-list>

  </Scroll>
    <BackTop @click.native="TopClick" v-show="isShow"></BackTop>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailSwiper from "./ChildDetail/DetailSwiper";
import DetailNavBar from "./ChildDetail/DetailNavBar";
import DetailbaseInfo from "./ChildDetail/DetailbaseInfo";
import DetailShopInfo from "./ChildDetail/DetailShopInfo";
import DetailGoodsInfo from "./ChildDetail/DetailGoodsInfo";
import DetailCommentInfo from "./ChildDetail/DetailCommentInfo";
import DetailParamInfo from "./ChildDetail/DetailParamInfo";
import DetailBottomBar from "./ChildDetail/DetailBotttomBar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/Goods/GoodsList";


import {getDetailData, getRecommend, Goods, Shop, GoodsParams} from "network/Detail";
import { debounce } from "../../common/utils";
import { itemListenerMinxi, isShowBackTop } from 'common/mixin.js'

import {mapActions} from "vuex"

export default {
  name: "Detail",
  components:{
    DetailSwiper,
    DetailNavBar,
    DetailbaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages:[],
      Goods: {},
      shops: {},
      commentInfo:{},
      detailInfo:{},
      paramsInfo:{},
      recommendInfo:[],
      themeTopYs:[],
      currentIndex: 0,
      message: '',
      isShow: false
    }
  },
  mixins: [itemListenerMinxi, isShowBackTop],
  created() {
   this.iid = this.$route.params.iid

    getDetailData(this.iid).then( res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages

      this.Goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shops = new Shop(data.shopInfo)

      this.commentInfo = data.rate.list[0] || {}

      this.detailInfo = data.detailInfo

      this.paramsInfo = new GoodsParams (data.itemParams.info, data.itemParams.rule)

      this.$nextTick( () => {
      })

      this.getThemeTopY = debounce( () => {
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.param.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)

        console.log(this.themeTopYs)
      })

    })

    getRecommend().then( res => {
      this.recommendInfo = res.data.list
    })
  },
  methods: {
    ...mapActions(['addCart']),

    addToCart() {
      const product = {}
      product.image = this.topImages[0];
      product.title = this.Goods.title
      product.desc = this.Goods.desc;
      product.price = this.Goods.realPrice;
      product.iid = this.iid


      this.addCart(product).then( res => {
        this.$toast.show(res, 2000)
      })
      //this.$store.dispatch('addCart', product).then( res => {
        //console.log(res);
     // })
    },
    imgload() {
      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    TopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },


    contentScroll(position) {
      const positionY = -position.y

      let length = this.themeTopYs.length
      for (let i=0; i<length-1; i++) {
        if(this.currentIndex !== i &&( positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i+1] ))
        {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
      this.demo(position)
    },
    itemClick (index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index])
    }
  },
  mounted() {
  },
  destroyed() {
    this.$bus.$off('ItemimageLoad', this.itemImgListener)
  },
  updated() {
  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content {
    height:calc(100% - 44px - 49px);
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>

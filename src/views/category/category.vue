<template>
  <div class="category">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
    <SlideBar :slide-bar-list="categoryList" @slideBarItemClick="slideBarItemClick"></SlideBar>
    <TabControl :titles="titles"
                @tabClick="tabItemClick"
                class="tab-control"
                ref="tabControl"></TabControl>
    <scroll class="scroll-height" ref="scroll">

      <SubCategory :sub-category-list="subcategoryList"></SubCategory>
      <goods-list :goods="categoryDetailList"></goods-list>
    </scroll>

  </div>
</template>

<script>
  import Navbar from "components/common/navbar/Navbar";
  import SlideBar from "./children/SlideBar";
  import TabControl from "components/content/TabControl";
  import SubCategory from "./children/SubCategory";
  import GoodsList from "components/content/Goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";

  import {getCategory, getSubCategory, getCategoryDetail} from "../../network/Category";
  import {itemListenerMinxi} from "../../common/mixin";

  export default {
    name:"category",
    components:{
      Navbar,
      SlideBar,
      TabControl,
      SubCategory,
      GoodsList,
      Scroll
    },
    data() {
      return {
        // 分类内容数据
        categoryDetailList:[],
        subcategoryList:[],

        // 分类侧边栏数据
        categoryList: [],
        titles: ['流行','新款', '精选'],
        currentIndex: 0
      }
    },
    mixins:[itemListenerMinxi],
    methods: {
      getCategory(){
        getCategory().then(res => {
          this.categoryList = res.data.category.list
          this.$nextTick( () => {
            this.getSubCategory(this.categoryList[0].maitKey);
            this.getCategoryDetail(this.categoryList[0].miniWallkey, 'pop');
          });
        });
      },

      getCategoryDetail(key,type) {
        getCategoryDetail(key,type).then(res => {
          this.categoryDetailList = [...res];
          console.log(this.categoryDetailList)
        })
      },

      getSubCategory(key) {
        getSubCategory(key).then(res => {
          this.subcategoryList = [...res.data.list]
        })
      },

      tabItemClick(index) {
        const typeList = ['pop', 'new', 'sell']
        //切换数据类型
        this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, typeList[index]);

      },

      slideBarItemClick({maitKey, index}) {
        // 防止反复请求
        if(this.currentIndex === index) return;
        this.currentIndex = index

        // 每次切换分类初始化tabControl的下标
        this.$refs.tabControl.currentIndex = 0

        // 请求对应的推荐列表
        this.getCategoryDetail(this.categoryList[this.currentIndex].miniWallkey, 'pop');
        this.getSubCategory(maitKey)
      }
    },
    created() {
      this.getCategory()
    }
  }
</script>

<style scoped>
/*.wrappar {
  height: 150px;
  background-color: red;
  overflow: hidden;
  /*overflow-y:scroll;
  }*/
  /*.content{
    height: 300px;
    overflow: hidden;
  }*/
  .category {
    position: relative;
  }

  .nav-bar {
    font-weight: 600;
    background-color: var(--color-high-text);
    color: #ffffff;
  }

  .tab-control {
    position: absolute;
    left: 100px;
    right: 0;
    z-index: 2;
  }

.scroll-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 100px;
  overflow: hidden;
}
</style>

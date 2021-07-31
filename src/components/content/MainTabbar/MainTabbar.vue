<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="gold">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>

    <TabBarItem path="/category" activeColor="gold">
      <img slot="item-icon" src="~assets/img/tabbar/分类.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/分类(1).svg" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem >

    <TabBarItem path="/cart" activeColor="gold">
      <img slot="item-icon" src="~assets/img/tabbar/购物车.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/购物车-active.svg" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>

    <TabBarItem path="/profile" activeColor="gold">
      <img slot="item-icon" src= "~assets/img/tabbar/我的.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/我的-active.svg" alt="">
      <div slot="item-text">个人</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from '../../common/tabbar/TabBar'
  import TabBarItem from '../../common/tabbar/TabBarItem'

  export default {
      name: 'MainTabbar',
      components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>

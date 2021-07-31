<template>
  <div class="cart">

    <Navbar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </Navbar>

      <CartList></CartList>

    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import CartList from "./childComps/CartList"
import CartBottomBar from "./childComps/CartBottomBar";



import { mapGetters } from "vuex"
  export default {
    name:"cart",
    components: {
      Navbar,
      CartList,
      CartBottomBar

    },
    computed: {
      //MapGetters第一种用法
      // ...mapGetters(['cartlength', 'cartlist'])

      ...mapGetters({
        length: 'cartlength',
        list: 'cartlist'
      })
    }
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-high-text);
    color: #fff;
    font-weight: 700;
  }

</style>

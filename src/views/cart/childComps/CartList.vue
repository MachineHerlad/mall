<template>
  <div class="cart-list">
    <Scroll class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :item-info="item"
        :key="index">
      </cart-list-item>
    </Scroll>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Scroll from "components/common/scroll/Scroll"

import CartListItem from "./CartListItem";

export default {
  name: "cartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    Scroll,
    CartListItem
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px - 40px);

}

  .content {
   height: 100%;
    overflow: hidden;
}


</style>

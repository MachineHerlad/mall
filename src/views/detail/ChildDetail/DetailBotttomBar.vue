<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service">
          <span class="text">客服</span>
      </i>
      </div>
      <div>
        <i class="icon shop">
          <span class="text">店铺</span>
        </i>
      </div>
      <div>
        <i class="icon select">
          <span class="text">收藏</span>
        </i>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailBotttomBar",
  methods: {
    addToCart() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 55px;
    background-color: #ffffff;

    position: relative;

    display: flex;
    text-align: center;
  }

  .bar-item {
    flex: 1;
    display: flex;
  }

  .bar-item>div {
    flex: 1;
  }

  .bar-left .text {
    font-size: 13px;
  }

  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position: 0 -54px;
  }

  .bar-left .shop {
    background-position: 0 -98px;
  }

  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 58px;
  }

  .bar-right .cart {
    background-color: #ffe817;
  }

  .bar-right .buy {
    background-color: var(--color-high-text)
  }
  .sport-ball {
    position: absolute;
    left: 225px;
    bottom: 20px;
  }
</style>

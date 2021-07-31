<template>
  <div class="check-botton" :class="{check: isChecked}">
    <img src="~assets/img/cart/icon-tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type:Boolean,
      default:true
    }

  }
}
</script>

<style scoped>
  .check-botton img {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check {
    background-color: red;
    border-color: red;
    border-radius: 50%;
  }
</style>

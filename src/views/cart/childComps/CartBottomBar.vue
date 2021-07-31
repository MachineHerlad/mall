<template>
    <div class="bottom-bar">
      <div class="check-content" @click="checkClick">
        <check-button
          :is-checked="isSelectAll"
          class="check-botton"></check-button>
        <span>全选</span>
      </div>

      <div class="price">
        合计：{{totalPrice}}
      </div>

      <div class="calculate" @click="calculateClick">
        去计算:({{checkLength}})
      </div>
    </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import {mapGetters} from "vuex"

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters({
      cart: 'cartList'
    }),

    totalPrice() {
      return '￥' + this.cart.filter( item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter( item => item.checked).length
    },
    isSelectAll() {
      if (this.cart.length === 0) return false
      //1.使用filter
      //return !this.cart.filter( item => !item.checked).length

      //2.使用find
      //return !this.cart.find( item => !item.checked)

      //3.遍历
      for(let item of this.cart) {
        if(!item.checked) return false
      }
      return true
    }
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {//全部选中
        this.cart.forEach( item => item.checked = false)
      }else {//全部或部分不选中
        this.cart.forEach( item => item.checked = true)
      }
    },
    calculateClick() {
      this.$toast.show("ssssss", 2000)
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: relative;
    display: flex;

    height: 40px;
    line-height: 40px;

    background-color: #eee;
  }

  .check-content {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 60px;
  }

  .check-botton {
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }

  .price {
    margin-left: 20px;
    flex: 1;
  }

  .calculate {
    width: 100px;
    text-align: center;
    background-color: #ff6600;
  }
</style>

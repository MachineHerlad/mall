<template>
  <Navbar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
    <div v-for="(item, index) in title"
         class="title-item"
    @click="itemclick(index)"
    :class="{active:currentIndex === index}">{{ item }}</div>
  </div>
  </Navbar>

</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

export default {
  name: "DetailNarBar",
  components: {
    Navbar
  },
  data() {
    return{
      title:['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods:{
    itemclick(index) {
      this.currentIndex = index
      this.$emit('itemClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 14px;
  }

  .title-item {
    flex: 1;
  }
  .active {
    color: #ff8198;
  }

  .back {
    margin-top: 6px;

  }
</style>

<template>
  <Swiper>
    <SwiperItem v-for="Item in banner">
      <a :href="Item.link">
        <img :src="Item.image" alt="" @load="imgload">
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index"

export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      istrue:false
    }
  },
  methods: {
    imgload(){
      if(!this.istrue) {
        this.$emit('imgload')
        this.istrue = true;
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>

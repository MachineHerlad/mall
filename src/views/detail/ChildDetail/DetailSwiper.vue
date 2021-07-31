<template>
  <div class="detail-swiper">
  <Swiper class="swi-per">
    <SwiperItem v-for="Item in images">
        <img :src="Item" alt="">
    </SwiperItem>
  </Swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index.js"

export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    images:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .swi-per {
    height: 400px;
  }
</style>

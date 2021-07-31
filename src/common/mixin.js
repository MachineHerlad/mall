import { debounce } from 'common/utils.js'
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMinxi = {
  data() {
    return {
      itemImgListener: null
    }
  },
  mounted() {
    let refresh = debounce(this.$refs.scroll.refresh, 100)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemimgLoad', this.itemImgListener)
  }
}


export const isShowBackTop = {
  data() {
    return {
      isShow:false
    }
  },
  components: {
    BackTop
  },
  methods:{
  demo(position) {
    this.isShow = -(position.y) > 1000
    }
  }
}


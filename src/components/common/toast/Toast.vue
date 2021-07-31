<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return{
    message: '',
    isShow : false
    }
  },
  methods: {
    show( message, duration) {
      this.message = message
      this.isShow = true

      setTimeout( () => {
        this.message = ''
        this.isShow = false
      }, duration)
    }
  }
}
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;

    z-index: 9;

    color: #fff;
    background-color: rgba(0, 0, 0, .75);
  }
</style>

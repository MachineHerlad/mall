<template>
  <div class="tab_control">
    <div class="tab_control_item" v-for="(item,index) in titles"
         :class="{active:index === currentIndex}" @click="itemIndex(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods:{
    itemIndex (index){
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style scoped>
  .tab_control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }

  .tab_control_item {
    flex: 1px;
  }

 .tab_control_item span {
    padding: 5px;
  }
  .active {
    color:var(--color-high-text)
  }

  .active span {
    border-bottom: 3px solid var(--color-high-text);

  }

</style>

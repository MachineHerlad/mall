<template>
  <div class="sub-category">
    <div v-for="(item, index) in subCategoryList"
         :key="index"
         class="sub-category-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
  props: {
    subCategoryList:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.sub-category {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 10px;
}

.sub-category-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 100px;
  margin-bottom: 10px;
}

.sub-category-item img {
  width: 65px;
  margin-bottom: 7px;
}

.sub-category-item p {
  font-size: 14px;
}
</style>

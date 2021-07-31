<template>
  <div class="pro-file">
    <navbar>
      <div slot="center">小码哥商城</div>
    </navbar>
    <Login></Login>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar";
import Login from "./ChildComps/Login";

  export default {
    name:"profile",
    components:{
      Navbar,
      Login
    }
  }
</script>

<style scoped>
.pro-file {
  width: 100%;
  height: 100%;
}

.nav-bar {
  font-weight: 600;
  color: #fff;
  background-color: var(--color-high-text);
}
</style>

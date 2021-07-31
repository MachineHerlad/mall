<template>
  <div class="pro-file">
    <navbar class="nav-bar">
      <div slot="center">我的</div>
    </navbar>
    <Login></Login>
    <Money></Money>
    <div class="line"></div>
    <profile-list></profile-list>
  </div>
</template>

<script>
import Navbar from "../../components/common/navbar/Navbar";
import Login from "./ChildComps/Login";
import Money from "./ChildComps/Money";
import ProfileList from "./ChildComps/ProfileList";

  export default {
    name:"profile",
    components:{
      Navbar,
      Login,
      Money,
      ProfileList
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

.line {
  width: 100%;
  height: 10px;
  background-color: #eee;
}
</style>

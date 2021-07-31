<template>
  <div class="login">
      <div class="user-pic">
<!--        <van-image :src="defaultPic" class="user-pic-img" fit="cover" round/>-->
      </div>
    <div class="user-info">
      <p>登录/注册</p>
      <div class="phone-num">
        <img src="~assets/img/profile/phone.png" alt="" class="icon-phone">
        <p>暂未绑定手机号</p>
      </div>
    </div>
    <div class="profile-arrow-right">
      <img src="~assets/img/profile/arrow_right.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return{
      defaultPic: require("~assets/img/profile/user.png")
    }
  }
}
</script>

<style scoped>

</style>

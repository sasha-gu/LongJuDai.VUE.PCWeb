<template>
<div class="login-wrapper">
  <div class="head-wrapper">
    <v-head></v-head>
  </div>
  <div class="nav-wrapper">
    <v-nav></v-nav>
  </div>
  <div class='sucess'>
      <div class='top'>
        <img src="./resource/suc.png" height="32" width="32" alt="">
        恭喜您，注册成功！
      </div>    
      <p>欢迎来到龙驹财行</p>
      <div class='sucBtn'>开通银行存管</div>
  </div>
  <div class="footer-wrapper">
    <v-footer></v-footer>
  </div>
</div>
</template>
<script>
import Head from "@/components/head/head.vue";
import Nav from "@/components/nav/nav.vue";
import Footer from "@/components/footer/footer.vue";
  export default {
    components: {
    "v-head": Head,
    "v-nav": Nav,
    "v-footer": Footer
  },
    name: 'registerSuc',
    data() {
      return {}
    }
  }
</script>
<style scoped>
@import "./register.css";
</style>
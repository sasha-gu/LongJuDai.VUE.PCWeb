<template>
  <div class="aboutUs-wrap">
    <div class="index">
      <div class="head-wrapper">
        <v-head></v-head>
      </div>
      <div class="nav-wrapper">
        <v-nav></v-nav>
      </div>

    </div>
    <div class="aboutusnav-wrap">
      <ul class="aboutus-nav clearfix">
        <li>
          <router-link to="/aboutusIndex">公司简介</router-link>
        </li>
        <li>
          <router-link to="/partner">合作伙伴</router-link>
        </li>
        <li>
          <router-link to="/notice">网站公告</router-link>
        </li>
        <li>
          <router-link to="/legalAdviser">法律顾问</router-link>
        </li>
        <li>
          <router-link to="/mediaCoverage">媒体报道</router-link>
        </li>
        <li>
          <router-link to="/joinUs">加入我们</router-link>
        </li>
        <li>
          <router-link to="/contactus">联系我们</router-link>
        </li>
        <li>
          <router-link to="/#">安全保障</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
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
  data() {
    return {
      show: false
    };
  },
  components: {
    "v-head": Head,
    "v-nav": Nav,
    "v-footer": Footer
  }
};
</script>
<style>
@import "../../common/common.css";
@import "aboutUs.css";
</style>

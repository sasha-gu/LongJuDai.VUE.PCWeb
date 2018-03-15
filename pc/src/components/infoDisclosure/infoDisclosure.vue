<template>
    <div class="">
        <div class="index">
            <div class="head-wrapper">
                <v-head></v-head>
            </div>
            <div class="nav-wrapper">
                <v-nav></v-nav>
            </div>

        </div>
        <div class="container">
            <p class="mbnav">信息披露&nbsp;>&nbsp;
                <span>{{breadCrumb}}</span>
            </p>
            <div class="info_box">
                <ul class="info_nav">

                    <li class="actived">
                        <router-link to="/infoDisclosure/companyInfo">企业信息</router-link>
                    </li>
                    <li>
                        <router-link to="/infoDisclosure/dataDisplay">数据展示</router-link>
                    </li>
                    <li>
                        <router-link to="/infoDisclosure/policy">政策法规</router-link>
                    </li>
                    <li>
                        <router-link to="/infoDisclosure/major">重大事项</router-link>
                    </li>
                </ul>
                <router-view @transforTitle='getTitle'></router-view>
            </div>

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
import axios from "axios";
import config from "@/api/config";
export default {
  components: {
    "v-head": Head,
    "v-nav": Nav,
    "v-footer": Footer
  },
  data() {
    return {
        breadCrumb:''
    };
  },
  methods:{
      getTitle(title){
          this.breadCrumb = title
      }
  }
};
</script>
<style>
@import "../../common/common.css";
@import "infoDisclosure.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="head">
    <div class="head-center clearfix">
      <div class="fl">
        <img src="./resource/telIcon.png" alt="" class="telIcon">
        <span>客服电话：400-119－888 </span>
      </div>
      <div class="fr topbar">
        <ul class="fl">
          <li class="user-info" v-show="show">欢迎{{account}}来到龙驹贷</li>
          <li class="message" v-show="show">消息【 {{messageNum}} 】</li>
          <li class="exit"  v-show="show" @click="exitAccount">退出</li>
          <li class="activity-page">
            <a href="#" class="clearfix"><span class="fl">活动专题</span><i class="round fl"></i></a>
          </li>
          <li class="about-us">
            <router-link to="/aboutus">关于我们</router-link>
          </li>
          <li class="help">
            <router-link to="/helpcenter">帮助中心</router-link>
          </li>
        </ul>
        <div class="fl por download-box">
          <img src="./resource/mobileIcon.png" alt="" class="telIcon">
          <span>APP下载 </span>
          <transition name="bounce">
          <div  class="poa download-app">
          </div>
        </transition>
        </div>
      </div>
    </div>
      <div class="right_sidebar" id="right_sidebar">
        <ul>
            <li class="first_btn btn">
                <a class="hover" href="javascript:void(0)">
                    <img src="./resource/right_01.png" />
                </a>
                <a class="hover_active  btn"  href="javascript:void(0)"><img src="./resource/right_05.png" /></a>
                <div class="code">
                    <img src="./resource/downloadApp.png" />
                    <p>手机APP二维码</p>
                </div>
            </li> 
            <li class="two_btn btn" id="two_btn">
                <a class="hover" target="_blank" href="https://www.longjulicai.com/Plan/CalculateProfit">
                    <img src="./resource/right_02.png" />
                </a>
                <a class="hover_active" href="https://www.longjulicai.com/Plan/CalculateProfit" target="_blank"><img src="./resource/right_06.png" /></a>
            </li>
            <li class="third_btn btn">
                <a class="hover" href="javascript:void(0)">
                    <img src="./resource/right_03.png" />
                </a>
                <a class="hover_active" href="javascript:void(0)"><img src="./resource/right_07.png" /></a>
            </li>
            <li class="forth_btn btn" @click='goToTop'>
                <a class="hover" href="javascript:void(0)">
                    <img src="./resource/right_04.png" />
                </a>
                <a class="hover_active" id="goToTop" href="javascript:void(0)"><img src="./resource/right_08.png" /></a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "@/api/config";
import cMethods from '@/common/common.js'
export default {
  data () {
    return {
      show: false,
      account:"",
      messageNum:0,
    }
  },
  beforeMount(){

    if(cMethods.getCookie(config.cookieName)){
      let getToken = JSON.parse(cMethods.getCookie(config.cookieName)).token;
      let  getAccount = JSON.parse(cMethods.getCookie(config.cookieName)).account;
      this.show=true;
      this.account=getAccount;
      let bodyData={};
      config.data.ActionName = 'GetMessageCount';
      config.data.MessageType = 'PushMessage';
      config.data.Token = getToken;
      config.data.Data = JSON.stringify(bodyData);
      var _this = this;
      axios
        .post('', {}, config)
        .then(function(res) {
              let PersonalData=JSON.parse(JSON.parse(res.data).Data);
              if(PersonalData){
                  _this.messageNum=PersonalData.personalnumber;
                  _this.show=true;
              }


        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  methods: {
    exitAccount(){
      cMethods.delCookie(config.cookieName);
      window.location.reload();
    },

    goToTop(){
       let speed = 100;
       let timer;
       let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
       if(scrollTop > 0){
          timer = setInterval(function(){
            scrollTop = scrollTop - speed;
            document.documentElement.scrollTop = scrollTop;
            window.pageYOffset = scrollTop;
            document.body.scrollTop = scrollTop;
            if(scrollTop<=0){
              document.documentElement.scrollTop = 0;
              window.pageYOffset = 0;
              document.body.scrollTop = 0;
              clearInterval(timer);
            }
          },50)
       }
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "./head.css"
</style>

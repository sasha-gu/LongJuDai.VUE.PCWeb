<template>
  <div class="login-wrapper">
      <div class="head-wrapper">
        <v-head></v-head>
      </div>
      <div class="nav-wrapper">
        <v-nav></v-nav>
      </div>
      <div class="registerLink">
          还没有有账号？<router-link to="/register">立即注册</router-link>
      </div>
      <div class="login-container clearfix">
          <div class="leftImg fl">
              <img src="./resource/loginLeftImg.png" alt="">
          </div>
          <div class="loginForm fl">
               <h2>用户登录</h2>
               <ul>
                  <li>
                    <div class="inputBox clearfix ">
                      <div class="fl leftIcon">
                        <img src="./resource/login_icon1.png" alt="">
                      </div>
                      <input type="text" name="" value=""  @focus="SearchCardname" @blur="blurCardname" placeholder="请输入手机号码" class="fl" v-model="account" maxlength="11">
                    </div>
                    <p class="errorTip" v-text="accountTip"></p>
                  </li>
                  <li>
                    <div class="inputBox clearfix">
                      <div class="fl leftIcon">
                        <img src="./resource/login_icon3.png" alt="">
                      </div>
                      <input type="password" name="" value=""  @focus="SearchCardname" @blur="blurCardname" placeholder="请输入登录密码" class="fl" v-model="password" maxlength="16">
                    </div>
                    <p class="errorTip" >{{passwordTip}}</p>
                  </li>
               </ul>
               <button type="button" name="button" class="loginBtn"  @click="submitLogin">登录</button>
               <div class="safe">
                 <img src="./resource/login_icon4.png" alt="">
                 您的信息已使用SSL加密技术，数据传输安全
               </div>
          </div>
      </div>
      <div class="footer-wrapper">
        <v-footer></v-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "@/components/head/head.vue";
import Nav from "@/components/nav/nav.vue";
import Footer from "@/components/footer/footer.vue";
import axios from "axios";
import config from "@/api/config";
import cMethods from '@/common/common.js';
import Router from "../../../router/index";
export default {
  components: {
    "v-head": Head,
    "v-nav": Nav,
    "v-footer": Footer
  },
  data() {
    return {
      account:'',
      password:'',
      accountTip:"",
      passwordTip:"",
      classNameF:"",
      classNameS:""
    };
  },
  computed:{

   },
  methods: {
    // 获取焦点
    SearchCardname:function(obj){
      obj.path[1].style="border-color: rgb(35, 139, 203);"
    },
    blurCardname:function(obj){
        obj.path[1].style="border-color:#ccc;"
    },

    submitLogin(){
      this.accountTip="";
      this.passwordTip="";
        if(this.account===''){
            this.accountTip='请输入手机号码';
            return
        }
        if(!/^1\d{10}$/.test(this.account)){
          this.accountTip='输入手机号有误，请重新输入';
          return
        }
         if(this.password===''){
            this.passwordTip='请输入密码';
          return
        }

        if(!/^\S{1,}$/.test(this.password)){
          this.accountTip='登录密码有误，请重新输入';
          return
        }
        let bodyData={LoginName:this.account,Pwd:this.password};
        config.data.ActionName = 'AccountLogin';
        config.data.MessageType = 'Oauth';
        config.data.Data = JSON.stringify(bodyData);
        console.log(config.cookieName)
        var _this = this;
        axios
          .post('', {}, config)
          .then(function(res) {
                let resultCode=JSON.parse(JSON.parse(res.data).ResultCode);
              if (resultCode == 0) {
                  let LoginData=JSON.parse(JSON.parse(res.data).Data);
                  var cookieInfo = {
                    token:LoginData.token,
                    account:LoginData.useraccount
                  }
                  console.log(config.cookieName)
                   cMethods.setCookie(config.cookieName, JSON.stringify(cookieInfo));
                    Router.push({
                    path: "/",
                  });
              }else{
                  _this.passwordTip=JSON.parse(res.data).ResultMsg;
              }

          })
          .catch(function(err) {
            console.log(err);
          });
    }
  },
  beforeMount() {

  }
};
</script>
<style scoped>
@import "./login.css";
</style>

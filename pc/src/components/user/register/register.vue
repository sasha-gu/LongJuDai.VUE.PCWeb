<template>
<div class="login-wrapper">
  <div class="head-wrapper">
    <v-head></v-head>
  </div>
  <div class="nav-wrapper">
    <v-nav></v-nav>
  </div>
  <div class="registerLink" >
    还没有有账号？
    <router-link to="/login">立即登陆</router-link>
  </div>
  <div class="login-container clearfix">
    <div class="leftImg fl">
      <img src="./resource/password_img.png" :class="{VerifyingMobile:!show}" alt="">
      <img src="./resource/registered_img.png" :class="{VerifyingMobile:show}" alt="">
    </div>
    <div class="rightInfo fl">
      <ul class="register_tab clearfix">
        <li class=' fl' :class="{active:show}">验证手机<span class='fr'></span></li>
        <li class='fl' :class="{active:!show}">账户信息<span class='fr'></span></li>
        <li class='fl'>注册成功</li>
      </ul>
      <div class="register_content">
        <div class="register_slide loginForm"  :class="{VerifyingMobile:!show}">
          <ul>
            <li>
              <div class="inputBox clearfix ">
                <div class="fl leftIcon">
                  <img src="./resource/account_icon_tel.png" alt="">
                </div>
                <input type="text" name="" value="" @focus="SearchCardname" @blur="blurCardname" placeholder="请输入手机号码" class="fl" v-model="account" maxlength="11">
              </div>
              <p class="errorTip" v-text="accountTip"></p>
            </li>
            <li class=' code'>
              <div class="clearfix">
                <input class='fl' type="text"  maxlength="6" placeholder="请输入验证码" v-on:input="inputFuc" v-model="accountCode">
                <button class='fr' type="button" name="button" :disabled="disabled" @click="verifyingCode">{{codeMsg}}</button>
              </div>
              <p class="errorTip" v-text="codeTip"></p>
            </li>
            <li>
              <div class="inputBox clearfix">
                <div class="fl leftIcon">
                  <img src="./resource/registered_icon_lxr.png" alt="">
                </div>
                <input type="password" name="" value="" @focus="SearchCardname" @blur="blurCardname" placeholder="请输入推荐码或推荐人手机号" class="fl" v-model="Referee" maxlength="16">
              </div>
              <p class="errorTip">{{RefereTip}}</p>
            </li>
          </ul>
          <button v-if="loginBtnActive==''" type="button" name="button" class="loginBtn"  >下一步</button>
          <button v-if="loginBtnActive!=''" type="button" name="button"  :class={loginBtnActive} @click.once="nextStep">下一步</button>
          
          <div class="codeShadow" :class="{activeNone:isActive}">
              <div class="codeShadowContent">
                  <div class="codeShadowContentTitle">
                    <h2>请输入图形验证码</h2>
                    <img src="./resource/registered_icon.png" alt="" @click='deleteShadow'>
                  </div>
                  <div class="obtainCode clearfix">
                    <input class='fl' type="text" name="" maxlength="4" value="" placeholder="请输入图片验证码" v-model='imgCode'>
                    <div class="fr codebtn" type="button" @click="refreshCode" name="button"><s-identify :identifyCode="identifyCode"></s-identify></div>
                  </div>
                   <p class="errorTip imgcodeTip" v-text="imgTip"></p>
                  <div class="codeSure">
                    <button type="button" name="button" @click="codeSure">确定</button>
                  </div>
              </div>
          </div>
        </div>
        <div :class="{VerifyingMobile:show}" class="register_slide loginForm">
           <ul>
            <li>
              <div class="inputBox clearfix ">
                <div class="fl leftIcon">
                  <img src="./resource/account_icon_password.png" alt="">
                </div>
                <input type="password" name="" onpaste="return false" oncontextmenu="return false" value="" placeholder="请输入密码" class="fl" v-model="password"  maxlength="16" @blur="LoginPwd">
              </div>
              <p class="errorTip" v-text="passwordTip"></p>
            </li>
            <li>
              <div class="inputBox clearfix">
                <div class="fl leftIcon">
                  <img src="./resource/account_icon_password.png" alt="">
                </div>
                <input type="password" name="" value="" onpaste="return false" oncontextmenu="return false" @focus="Searchpassward" @input="blurpassward" placeholder="请再次输入密码" class="fl" v-model="passwordAgin" maxlength="16">
              </div>
              <p class="errorTip" v-text="passwordAginTip"></p>
            </li>
          </ul>
           <button v-if="passwardActive==''" type="button" name="button" class="loginBtn"  >下一步</button>
          <button v-if="passwardActive!=''" type="button" name="button"  :class={passwardActive} @click.once="complete">下一步</button>
        </div>
      </div>
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
import SIdentify from "@/components/common/Identify.vue";
import axios from "axios";
import config from "@/api/config";
import Router from "../../../router/index";
import cMethods from '@/common/common.js'
export default {
  name: 'register',
  components: {
    "v-head": Head,
    "v-nav": Nav,
    "v-footer": Footer,
    "s-identify":SIdentify
  },
  data() {
    return {
      imglist: [{
          img: "./resource/registered_img.png"
        },
        {
          img: "./resource/password_img.png"
        }
      ],
      show:true,
      isActive:true,
      account: '',
      Referee: '',
      accountTip: "",
      accountCode:"",
      codeTip:"",
      RefereTip: "",
      classNameF: "",
      classNameS: "",
      imgCode:"",
      imgTip:'',
      loginBtnActive:'',
      codeMsg:'获取验证码',
      // 图形验证码
      identifyCodes: "1234567890",
      identifyCode: "",
      disabled:false,
      password:'',
      passwordTip:'',
      passwardActive:"",
      passwordAgin:"",
      passwordAginTip:''
    };
  },
   mounted() {
    // 调用图形验证码接口，先生成随机的验证码
    this.identifyCode = "";
    // 调用接口可把这句话删除
     this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    // 获取焦点
    SearchCardname: function(obj) {
      obj.path[1].style = "border-color: rgb(35, 139, 203);"
    },
    blurCardname: function(obj) {
      obj.path[1].style = "border-color:#ccc;"
    },
    // 获取注册验证码
    verifyingCode() {
      if (this.account == "") {
        this.accountTip = '请输入手机号码';
        return;
      }
      if (!/^1\d{10}$/.test(this.account)) {
        this.accountTip = '输入手机号有误，请重新输入';
        return;
      }else{
        this.isActive = false;
        this.imgCode = "";
        this.imgTip = "";
        this.refreshCode();
      }

    },
    // 图片验证码的上边叉号点击，模态窗口消失
    deleteShadow(){
      this.isActive=true;
    },

     // 随机生成的数字
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode:function() {
      this.identifyCode = "";
      // 调用接口可把这句话删除
      this.makeCode(this.identifyCodes, 4);
    },
    // 调用接口可把这个函数删除
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        // console.log( this.randomNum(0, this.identifyCodes.length))
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
    },

    // 图片验证码的验证
    codeSure(){
      if(this.imgCode == ''){
        this.imgTip = '请输入图片验证码';
        return;
      }
      if(!/^[0-9A-Za-z]{4}$/.test(this.imgCode)){
        this.imgTip = '输入图片验证码有误，请重新输入';
        return;
      }else{
        // 缺少图形验证码的借口
        let bodyData={
          mobile:this.account,
          sendType:1
        };
        config.data.ActionName = 'SendSmsCode';
        config.data.MessageType = 'Mobile';
        config.data.Data = JSON.stringify(bodyData);
        var _this = this;
        axios
        .post('', {}, config)
        .then(function(res) {
              if(res.status == 200){
                  var retResoult = JSON.parse(res.data)
                  // 未注册过手机号
                  console.log(retResoult)
                  if(retResoult.ResultCode==0){
                    _this.disabled = true;
                      _this.codeTip = retResoult.ResultMsg;
                      _this.isActive=true;
                      let i = 61;
                      let t ;
                       clearInterval(t);
                        t = setInterval(function () {
                            i--;
                           _this.codeMsg = i + "s";
                            if (i == 0) {
                                 _this.codeMsg  = "重新获取";
                                 _this.disabled = false;
                                clearInterval(t);
                                i = 60;
                            }
                        }, 1000);
                    } else  if(retResoult.ResultCode==1007){
                    // 手机号已经注册过
                       _this.isActive=true;
                       console.log(retResoult.ResultMsg)
                      _this.codeTip =retResoult.ResultMsg;
                      // 判断图形验证码
                    }else if(retResoult.ResultCode== -10){
                      _this.isActive=false;
                      _this.imgTip = '图片验证码错误'
                    }
                 } 
             
        })
        .catch(function(err) {
          console.log(err);
        });
      }

    },
    // 验证手机验证码
    inputFuc(){
      if(this.accountCode.length==6){
        if(this.account.length==""){
          this.accountTip = "请输入手机号码";
          return;
        }
        if (!/^1\d{10}$/.test(this.account)) {
          this.accountTip = '输入手机号有误，请重新输入';
          return;
        }
         let bodyData={
              mobile:this.account,
              sendType:1,
              code:this.accountCode
            };
            config.data.ActionName = 'CheckSmsCode';
            config.data.MessageType = 'Mobile';
            config.data.Data = JSON.stringify(bodyData);
            var _this = this;
            axios
            .post('', {}, config)
            .then(function(res) {
              if(res.status == 200){
                 if(res.data){
                  let resData = JSON.parse(res.data); 

                  if(resData.ResultCode == 0){
                    _this.codeTip = resData.ResultMsg;
                   _this.loginBtnActive = "loginBtnActive";
                  }else if(resData.ResultCode==1004){
                    _this.codeTip = resData.ResultMsg;
                  }
                 } 
              }
            })
            .catch(function(err) {
              console.log(err);
            });
        }
    },
    // 验证手机中之后点击下一步
    nextStep(){
      this.show = false;
    },
    // !(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(LoginPwd))
    // 密码格式的验证
    LoginPwd(){
      if(this.password==""){
        this.passwordTip = '请输入密码';
        return;
      }
      if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password))){
         this.passwordTip = '请输入正确的6-16位包含数字和字母的密码';
        return;
      }
    },
    // 再次输入密码的判断
    Searchpassward(){
      if(this.password==""){
         this.passwordTip = '请输入密码';
        return;
      }
    
    },
    blurpassward(){
      if(this.passwordAgin != this.password){
        this.passwordAginTip = "前后密码不一致";
        return;
      } else{
        this.passwordAginTip = "";
        this.passwardActive = "loginBtnActive"
      }
    },
    complete(){
      let bodyData={
          CreateType:1,
          UserAccount:this.account,
          LoginPwd:this.password,
          Reference:this.Referee,
          RegAddress:""
        };
        console.log(bodyData)
        config.data.ActionName = 'AccountRegister';
        config.data.MessageType = 'Oauth';
        config.data.Data = JSON.stringify(bodyData);
        var _this = this;
        axios
        .post('', {}, config)
        .then(function(res) {
          if(res.status == 200){
                console.log(res)
            let retData = JSON.parse(res.data);
            if(retData.ResultCode == 0){
              if(retData.Data){
                let resultData = JSON.parse(retData.Data);
                console.log(resultData)
                 var cookieInfo = {
                    token:resultData.token,
                    account:_this.account
                  }
                  cMethods.setCookie(config.cookieName, JSON.stringify(cookieInfo));
                  Router.push({
                    path: "registerSuc",
                  });
              }
            }
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
@import "./register.css";
</style>

<template>
  <div class="infor_content">
    <div class="loginContent" v-bind:class="{ active: isActive }" >
      <div class="clearfix infor_top">
          <div class="fl logo">
            <img v-bind:src="userInfo.headpicurl" v-bind:alt="userInfo.headpic" v-if="userInfo.headpicurl!=''">
            <img src="./resource/logo.png" height="68" width="68" alt="userInfo.headpic" v-else>
          </div>
          <div class="fl vipinfor">
            <p>{{userInfo.useraccount}}</p>
            <div class="">
              <img src="./resource/person.png" alt="">

              <span v-if="time < 12 ">上午好！</span>
              <span v-else>下午好！</span>

            </div>
          </div>
      </div>
      <div class="infor_bottom">
        <p>可用金额：</p>
        <div class="clearfix cash">
          <p class='fl first'><span>{{Number(userInfo.blanceamount).toFixed(2)}}</span>元</p>
          <p class='fr now'>立即充值</p>
        </div>
        <button type="button" name="button">进入我的账户</button>
      </div>
    </div>
    <div class="noLoginContent" v-bind:class="{ active: !isActive }">
      <button type="button" name="button" ><router-link to="/register">快来注册吧</router-link></button>
    </div>
  </div>
</template>
<script type="text/javascript">
import axios from 'axios'
import config from "@/api/config";
import cMethods from '@/common/common.js'
export default {
  name:"indexInformation",
  data(){
    return{
      isActive:false,
      userInfo:[],
      time:""
    }
  },
    beforeMount() {
        let now = new Date();
        let hour = now.getHours();
        this.time = hour;
        if(cMethods.getCookie(config.cookieName)){
          let bodyData={};
          config.data.ActionName = 'GetMyAccount';
          config.data.MessageType = 'Account';
          config.data.Data = JSON.stringify(bodyData);
          var _this = this;
          axios
            .post('', {}, config)
            .then(function(res) {
                if (res.status == 200) {
                  if(res.data){
                    var infoData=JSON.parse(JSON.parse(res.data).Data);
                    if(infoData){
                      _this.userInfo = infoData;
                    }
                  }
                }

            })
            .catch(function(err) {
              console.log(err);
            });
      }else{
        this.isActive = true;
      }
  },
   methods: {}

}
</script>
<style media="screen" scoped>
  .infor_content{
    background: #fff;
    position: absolute;
    left:50%;
    top:50px;
    margin-left: 250px;
    z-index: 100;
    width:272px;
  }
  .loginContent{
    padding:20px 0;
  }
  .infor_top{
    border-bottom: 1px solid #ccc;
    padding:0 20px 10px;
    font-size:14px;
  }
  .infor_top .logo{
    margin:0 15px 0 10px;
  }
  .infor_top .logo img{
    width:68px;
    height: 68px;
    border-radius: 50%;
  }
  .vipinfor{
    padding-top:12px;
  }
    .vipinfor p{
      margin-bottom:5px;
    }
    .infor_bottom{
        padding:40px 20px 0;
        font-size:14px;
    }
    .infor_bottom .cash p.first{
      color:#ff6d44;
      font-size:12px;
      margin:5px 0;
    }
    .infor_bottom .cash span{

      font-size:26px;
    }
    .infor_bottom .cash p.now{
      border:1px solid #ff6d44;
      padding:5px;
      font-size:14px;
      color:#ff6d44;
      margin-top:10px;
    }
    .infor_bottom button{
      background: #4178ff;
      border: none;
      outline: none;
      width:232px;
      height:40px;
      text-align: center;
      line-height: 40px;
      color:#fff;
      margin-top:10px;
    }
    /* 未登录 */
  .noLoginContent{
    background: url(./resource/nologin.png) no-repeat;
    background-size: 100%;
    height:312px;
    text-align: center;
    margin-top:-15px;
  }
  .noLoginContent button{
    background: #fff;
    border: none;
    outline: none;
    width:232px;
    color:#e75b53;
    height:40px;
    font-size:14px;
    text-align: center;
    line-height: 40px;
    margin-top:10px;
    position: relative;
    top:230px;
  }
  .active{
    display: none;
  }

</style>

<template>
	<div class='planDetail_top'>
        <div class='clearfix top_content'>
          <p class='fl OrderNumber'>{{message.planname}}{{message.planno}}</p>
          <div class="profit-progress clearfix fl">
            <div class="progressBar fl">
             
              <div class="progress" :style="{ width: (message.raiseamount /message.planamount).toFixed(2)*160+'px' }"></div>
            </div>
             <div v-if="message.raiseamount <= 0" class='fl'>
            0%
          </div>
          <div v-else="message.raiseamount >0" class='fl'>
           {{(message.raiseamount /message.planamount*100).toFixed(0)}}%
          </div>
           
          </div>
          <div class='fr calculation'>投资计算</div>
        </div>
        <div class='clearfix describe'>
          <!-- 左边的样式 -->
          <div class="fl describe_left">
            <ul class='clearfix describe_left_list ' >
              <li class='fl first'>
                <div><span>{{message.annualrate}}</span>%</div>
                <div class='source'>年化收益率</div>
              </li>
              <li class='fl second'>
                <div><span>{{message.investmentterm}}</span>天</div>
                <div class='source'>投资期限</div>
              </li>
              <li class='fl'>
                 <div>
                  <span v-if="Number(message.minbidamount)<=100">100.00</span>
                  <span v-else>{{Number(message.minbidamount).toFixed(2)}}</span>
                元</div>
                <div class='source'>起投金额</div>
              </li>
            </ul>
            <div class='clearfix bid_icon'>
              <div class='fl bid_common'>
                <div>
                  <img src="./resource/particulars_icon2.png" height="9" width="9" alt="">募集总额：{{message.raiseamount}}元
                </div>
                <div><img src="./resource/particulars_icon2.png" height="9" width="9" alt="">标的来源：{{message.bidrange}}</div>
              </div>
              <div class='fl bid_right'>
                <div>
                  <img src="./resource/particulars_icon2.png" height="9" width="9" alt="">还款方式：{{message.backtype==1?" 一次性还本付息":""}}
                </div>
                <div>
                  <img src="./resource/particulars_icon2.png" height="9" width="9" alt="">还款时间：到期后次日
                </div>
              </div>
            </div>
           
          </div>
          <div class="fl describe_right">
            <div v-if='cookieinfo!=""'>
              <div class='mostInvested'>本次最多可投入：<span>{{Number(message.maxbidamount).toFixed(2)}}</span>元</div>
              <div class='clearfix account_balance'>
                <div class="fl">账户余额：<span>{{Number(banlace.blanceamount).toFixed(2)}}</span>元</div>
                <div class="fr recharge ">充值</div>
              </div>
            </div>
             <div v-else class='surplusAmount'>
               <p>剩余可投金额：<span>{{message.planstatus == 20 ? 0:Number(message.planamount - message.raiseamount).toFixed(2)}}</span>元</p>
             </div>
            <div class='clearfix eval'>
              <div class="minus fl" @click='minus'>-</div>
              <input type="text" id="BidAmount" v-model='banlaceMoney' placeholder="输入投资金额，为100元整倍数" maxlength="10" class="fl">
              <div class="plus fl" @click='plus'>+</div>元
              <i class="poa Validform_wrong"></i><br/>
             <!--  <span class="Validform_checktip poa">（金额为100的整数倍）</span> -->
            </div>
            <div class='earnings'>预期收益：<span>0</span>元</div>
            <div class='immediateBid'>
              <a href="#">立即投标</a>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import config from "@/api/config";
	export default {
  props:['message',"cookieinfo"],
  data() {
    return {
     banlace:'',
     banlaceMoney:'',
     num:0
    };
  },
  beforeMount() {
    this.BlanceAmount()
  },
  methods: {
     // 登录之后的样式以及调借口
    BlanceAmount(){
      if(this.cookieinfo){
        let body={};
        config.data.ActionName = 'GetMyAccount';
        config.data.MessageType = 'Account';
        config.data.Data = JSON.stringify(body);
        let _this = this;
         axios
        .post('', {}, config)
        .then(function(res) {
          if(res.status==200){
            if(res.data){
             let DayData = JSON.parse(JSON.parse(res.data).Data);
              _this.banlace = DayData;
              
            }
          }

        })
        .catch(function(err) {
          console.log(err);
        });
      }
    },
    // 加
    plus(){ 
      this.num += 100;
      this.banlaceMoney = this.num;
    },
    // 减
    minus(){
      if(this.banlaceMoney<=100){
        this.banlaceMoney = 100;
      }else{
        this.banlaceMoney -= 100;
      }
    }
  }
};
</script>
<style scoped>
  @import "./planDetail.css";
</style>
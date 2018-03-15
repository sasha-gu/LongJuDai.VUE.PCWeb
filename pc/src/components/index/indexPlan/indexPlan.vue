<template>
  <div class="indexPlan">
    <div class="plan-center clearfix wrapper">
      <div class="plan-left fl">
          <h2>精选产品</h2>
          <div class="sub-title clearfix">
              <div class="line fl"></div>
              <p class="fl">优质项目，稳健增值</p>
              <div class="line fl line2"></div>
          </div>
          <div class="btn-wrap">
              <router-link to="/">查看更多+</router-link>
          </div>
      </div>
      <ul>
        <li v-for='item in plan' :id="item.pid">
          <div class="product-list fl">
              <div class="plan-name fl">
                  <div class="name"  v-show='item.plantype==1?true:false'>
                      <img src="./resource/56PlanIcon.png" alt="" class="icon">{{item.planname}}
                  </div>
                  <div class="name"  v-show='item.plantype==2?true:false'>
                      <img src="./resource/home_ic_axd.png" alt="" class="icon" >{{item.planname}}
                  </div>
                  <div class="raise-money bottom-desc">
                      募集金额：{{item.planamount}}元
                  </div>
              </div>
              <div class="rate fl">
                  <div class="profit-rate">
                      <span>{{item.annualrate}}</span>%
                  </div>
                  <div class="bottom-desc">
                      年化收益率
                  </div>
              </div>
              <div class="time fl">
                <div class="profit-time">
                    <span>{{item.investmentterm}}</span>天
                </div>
                <div class="bottom-desc">
                    投资期限
                </div>
              </div>
              <div class="profit-progress-content fl">
                <div class="bottom-desc" v-if="item.raiseamount <= 0">
                    投资进度：0%
                </div>
                <div class="bottom-desc" v-else="item.raiseamount >0">
                    投资进度：{{(item.raiseamount /item.planamount*100).toFixed(0)}}%
                </div>
                <div class="progressBar_btn">
                    <div class="progress" :style="{ width: (item.raiseamount /item.planamount).toFixed(2)*160+'px' }"></div>
                </div>
              </div>
              <div class="plan-href fr">
                <router-link :to="{ 
                path: '/planDetail',
                query: {
                  planNo:item.planno
                }}">立即投标</router-link>
              </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from "@/api/config";
export default {
  beforeMount() {
    let bodyData={pageindex:1,pagesize:5};
    config.data.ActionName = 'PlanFirstList';
    config.data.MessageType = 'Plan';
    config.data.Data = JSON.stringify(bodyData);
    var _this = this;
    axios
      .post('', {}, config)
      .then(function(res) {
          //  console.log(_this.Announce)
          if (res.status == 200) {
            var planData=JSON.parse(JSON.parse(res.data).Data);
            if(planData){
              _this.plan=planData.planfirstlist[0].planlist;

            }
          }

      })
      .catch(function(err) {
        console.log(err);
      });
  },
  data() {
    return {
      plan:[]
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "./indexPlan.css"
</style>

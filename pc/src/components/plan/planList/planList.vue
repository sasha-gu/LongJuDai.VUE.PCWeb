<template>
<div class="plan-wrapper">
  <div class="head-wrapper">
    <v-head></v-head>
  </div>
  <div class="nav-wrapper">
    <v-nav></v-nav>
  </div>
  <div class="select-wrapper clearfix" >
    <div class="fl select">
      <dl class="clearfix day">
        <dt class="fl">投资期限：</dt>
        <!-- <dd class="fl active all" >全部</dd> -->
        <!-- v-bind:class="activeIndex==item.id?'active':''" -->
        <dd v-for='item in dayList' @click="dayItem(item)" :class="activeIndex==item?'active':''" class="fl">{{item}}<span v-if='item!="全部"'>天</span></dd>
      </dl>
      <dl class="clearfix rate">
        <dt class="fl">年化收益率：</dt>
        <!-- <dd class="fl active all">全部</dd> -->
        <dd v-for='item in rateList' @click="rateItem(item)" :class="rateIndex==item?'active':''"  class="fl">{{item}}</dd>
      </dl>
    </div>
    <img src="./resource/selectImg.png" alt="" class="fr selectImg">
  </div>

  <div class="plan-list" :class='{ hide : !isActive }' >
    <ol class="table-tit clearfix">
      <li class="plan-name">项目名称</li>
      <li class="rate">年化收益率</li>
      <li class="plan-days">期限</li>
      <li class="raise-amount">募集金额</li>
      <li class="profit-progress">投资进度</li>
    </ol>
    <ul class="plan-box clearfix">
      <li class="clearfix" v-for='item in planList'>
        <div class="plan-name">
          <div class="name" v-show='item.plantype==1?true:false'>
            <img src="./resource/56PlanIcon.png" alt="" class="icon">{{item.planname}}
          </div>
          <div class="name" v-show='item.plantype==2?true:false'>
            <img src="./resource/home_ic_axd.png" alt="" class="icon">{{item.planname}}
          </div>
        </div>
        <div class="rate">{{item.annualrate}}<span>%</span>
          <i class="add-rate" v-if="item.fixedinterestrate > 0">
            +{{item.fixedinterestrate}}<span>%</span>
          </i>
        </div>
        <div class="plan-days">{{item.investmentterm}}<span>天</span></div>
        <div class="raise-amount">{{item.planamount}}<span>元</span></div>
        <div class="profit-progress">
          <div class="progressBar">
            <div class="progress" :style="{ width: (item.raiseamount /item.planamount).toFixed(2)*160+'px' }"></div>
          </div>
          <div v-if="item.raiseamount <= 0">
            0%
          </div>
          <div v-else="item.raiseamount >0">
            {{(item.raiseamount /item.planamount*100).toFixed(0)}}%
          </div>
        </div>
        <div class="plan-btn">
          <a href="#">
              <router-link :to="{ 
                path: '/planDetail',
                query: {
                  planNo:item.planno
                }}">立即投标</router-link>
            </a>
        </div>
      </li>

    </ul>
    <div class="pageDiv">
      <v-pagination :allpages="allpages" ref='Pagination' :current.sync="pageNo" @navpage="getPlanList"></v-pagination>
    </div>
  </div>
  <div  class="null_num "  :class='{hide:isActive}'>
    <img src="./resource/null.png" alt="">
    <p>暂无记录</p>
  </div>
  <div class="footer-wrapper">
    <v-footer></v-footer>
  </div>
</div>
</template>

<script>
import Pagination from "@/components/common/pagination/pagination.vue";
import Head from '@/components/head/head.vue'
import Nav from '@/components/nav/nav.vue'
import Footer from '@/components/footer/footer.vue'
import axios from "axios";
import config from "@/api/config";
export default {
  components: {
    'v-head': Head,
    'v-nav': Nav,
    'v-footer': Footer,
    "v-pagination": Pagination
  },
  data() {
    return {
      dayList: [],
      rateList: ["全部",'1.01%以下', '8%－10%', '10%－12%', '12%以上'],
      planList: [],
      curIndex: "",
      allpages: 1,
      pageNo: 1,
      activeIndex:'全部',
      dayTime:'',
      rateIndex:"全部",
      inveTime:"",
      pageDefault:1,
      isActive:true
    };
  },
  beforeMount() {
    this.selectDay();
    this.getPlanList();
  },
  methods: {
    selectDay() {
      let bodyData = {
        configKey: 'PlanTerm'
      };
      config.data.ActionName = 'GetSysConfig';
      config.data.MessageType = 'SysConfig';
      config.data.Data = JSON.stringify(bodyData);
      let _this = this;
      axios
        .post('', {}, config)
        .then(function(res) {
          var DayData = JSON.parse(JSON.parse(res.data).Data);

          if (DayData) {
           let arr = DayData.configvalue.split(",");
            arr.unshift('全部');
             _this.dayList = arr;

          }

        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getPlanList(curPage) {
      if(this.dayTime=="全部"){
        this.dayTime = '';
      }
      let bodyData = {
        pageindex: this.pageNo,
        pagesize: 10,
        PlanUserType:'',
        InvestmentTerm: this.dayTime,
      };
      let _this = this;
      config.data.ActionName = "PlanList";
      config.data.MessageType = "Plan";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
              let planData = JSON.parse(JSON.parse(res.data).Data);
              if (planData) {
                if(planData.planlist.length!=0){
                   _this.planList = planData.planlist;
                   _this.isActive = true;
                 }else{
                  _this.isActive = false;
                 }
               
                _this.allpages = planData.allpages;
              }
            
            
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    dayItem(parme){
      this.activeIndex = parme;
      this.dayTime = parme;
      this.pageNo = 1;
      this.allpages = 1;
      // 父组件调用子组件方法传递page值，在模板上用ref声明子组件
      this.$refs.Pagination.goPage(1) 
      this.getPlanList(this.pageNo);

    },
    rateItem(obj){
      this.rateIndex = obj;
    },
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../../common/common.css";
@import "./planList.css";
.wrapper {
  width: 1100px;
  margin: 0 auto;
}
</style>

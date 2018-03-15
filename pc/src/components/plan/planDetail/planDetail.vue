<template>
<div class="plan-wrapper">
  <div class="head-wrapper">
    <v-head></v-head>
  </div>
  <div class="nav-wrapper">
    <v-nav></v-nav>
  </div>
  <div class='planDetail'>
    <v-info :message='productItem' :cookieinfo='cookinInfo'></v-info>

    <div class='planDetail_bot'>
        <ul class='clearfix tab'>
          <li class='fl' :class="{active:tabActive}" @click='borrower' >借款人</li>
          <li class='fl last' :class="{active:!tabActive}" @click="investmentRecords">投资记录</li>
        </ul>
         <div>
            <div :class="{hide:!tabActive}">
              <v-borrowerInfo :mortgagor='mortgagorInfo'></v-borrowerInfo>
            </div>
            <div :class="{hide:tabActive}">
              <v-investmentRecords></v-investmentRecords>
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
import Pagination from "@/components/common/pagination/pagination.vue";
import Head from '@/components/head/head.vue'
import Nav from '@/components/nav/nav.vue'
import Footer from '@/components/footer/footer.vue'
import planDetailInfo from "@/components/plan/planDetail/planDetailInfo.vue"
import borrowerInfo from "@/components/plan/planDetail/borrowerInfo.vue"
import investmentRecords from "@/components/plan/planDetail/investmentRecords.vue"
import axios from "axios";
import Router from "../../../router/index";
import config from "@/api/config";
import cMethods from '@/common/common.js';
export default {
  components: {
    'v-head': Head,
    'v-nav': Nav,
    'v-footer': Footer,
    "v-info":planDetailInfo,
    "v-borrowerInfo":borrowerInfo,
    "v-investmentRecords":investmentRecords,
    "v-pagination": Pagination
  },
  data() {
    return {
      curIndex: "",
      allpages: 1,
      pageNo: 1,
      tabActive:true,
      productItem:[],
      mortgagorInfo:[],
      cookinInfo:''
    };
  },
  beforeMount() {
   this.productInfo();
   if(cMethods.getCookie(config.cookieName)){
     this.cookinInfo = cMethods.getCookie(config.cookieName);
   }
  
  },
  methods: {
    borrower(){
      this.tabActive=true
    },
    investmentRecords(){
      this.tabActive=false
    },
    // 理财产品信息
    productInfo(){
      let parme = {
        planNo:Router.history.current.query.planNo
      }
      config.data.ActionName = 'PlanDetailByNo';
      config.data.MessageType = 'Plan';
      config.data.Data = JSON.stringify(parme);
      let _this = this;
      axios
        .post('', {}, config)
        .then(function(res) {
          if(res.status==200){
            if(res.data){
             let DayData = JSON.parse(JSON.parse(res.data).Data);
              console.log(DayData)
              _this.productItem = DayData;
              console.log(DayData.obb)
              _this.mortgagorInfo = DayData.obb;
            }
          }

        })
        .catch(function(err) {
          console.log(err);
        });
    }

  }
};
</script>
<style scope>
@import "../../../common/common.css";
@import "./planDetail.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->



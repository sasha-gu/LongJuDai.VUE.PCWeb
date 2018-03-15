<template>
  <div class="helpcenter-wrapper">
    <div class="index">
      <div class="head-wrapper">
        <v-head></v-head>
      </div>
      <div class="nav-wrapper">
        <v-nav></v-nav>
      </div>

    </div>
    <div class="helpCont">
      <div class="wrapper">
        <div class="container clearfix">
          <div class="sidebar fl">
            <h2 class="title">帮助中心</h2>
            <ul class="">
              <li v-for="item in sidebarItems" :key="item.id" v-bind:class="activeIndex==item.id?'active':''" @click="getQslist(item.id,item.helptype)">
                <i></i>
                <a>{{item.helptype}}</a>
              </li>
            </ul>
          </div>
          <div class="mainCont fr">
            <div class="title">{{subTitle}}</div>
            <ul v-if="qsList.length!=0">
              <li v-for="(item,index) in qsList" :key="item.id">
                <p class="qs" @click="toggle(index)" v-bind:class="{unfold:item.isShow }">
                  <i></i>{{item.title}}
                </p>
                <div class="answer" v-show="item.isShow" v-html='item.detail'>
                </div>

              </li>
            </ul>
            <div v-else class="null_num" style="width: 100%; text-align: center;"><img src="./resource/null.png" alt="" style="margin:120px 0 20px;">
              <p>暂无记录</p>
            </div>
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
      activeIndex: "",
      isShow: false,
      sidebarItems: [],
      subTitle: "",
      qsList: []
    };
  },
  methods: {
    toggle(index) {
      // console.log(this.qsList[index].isShow);
      this.qsList[index].isShow = !this.qsList[index].isShow;
      // console.log(this.qsList[index].isShow);
    },
    getQsTypeData() {
      //获取帮助中心问题分类
      let _this = this;
      let bodyData = {};
      config.data.ActionName = "GetWebHelpCenterType";
      config.data.MessageType = "WebManager";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            var dataStr = JSON.parse(JSON.parse(res.data).Data);
            if (dataStr) {
              _this.sidebarItems = dataStr.list;
              _this.activeIndex = dataStr.list[0].id;
              _this.subTitle = dataStr.list[0].helptype;
              _this.getQslist(_this.activeIndex, _this.subTitle);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getQslist(id, helptype) {
      //获取分类相应问题及答案
      let _this = this;
      let bodyData = { TypeID: id };
      this.subTitle = helptype;
      this.activeIndex = id;
      config.data.ActionName = "GetApiWebHelpCenterListByTypeID";
      config.data.MessageType = "WebManager";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            let dataStr = JSON.parse(res.data).Data;
            // console.log( dataStr);
            if (dataStr) {
              _this.qsList = JSON.parse(dataStr).list;
              for (var i = 0; i < _this.qsList.length; i++) {
                //向每组问题添加isShow属性（默认答案不显示），以便控制答案的显示与隐藏
                _this.$set(_this.qsList[i], "isShow", false);
              }
              console.log( _this.qsList[0].detail)
            }else{
              _this.qsList=[];
              // console.log( _this.qsList)
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    //do something after creating vue instance
    this.getQsTypeData();
  }
};
</script>
<style>
@import "../../common/common.css";
@import "helpcenter.css";
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 1100px;
  margin: 0 auto;
}
.helpCont {
  background: #f5f5f5;
  padding: 30px 0;
}
.mainCont section {
  padding: 12px 25px;
}
.sidebar {
  width: 170px;
  background: #fff;
}
.sidebar .title {
  position: relative;
  height: 50px;
  line-height: 50px;
  color: #0f599c;
  padding-left: 20px;
  box-sizing: border-box;
}
.sidebar .title:before {
  content: "";
  display: inline-block;
  width: 3px;
  height: 23px;
  background-color: #0f599c;
  position: absolute;
  left: 0;
  top: 13px;
}
.sidebar li {
  height: 42px;
  line-height: 42px;
  color: #333;
  text-align: left;
  padding-left: 20px;
}
.container {
  width: 1100px;
}
.sidebar li i {
  display: inline-block;
  width: 7px;
  height: 7px;
  border: 1px solid #0f599c;
  border-radius: 50%;
  margin-right: 6px;
}
.sidebar li.active {
  background: #0f599c;
  color: #fff;
}
.sidebar li.active i {
  border-color: #fff;
  background-color: #fff;
}
.sidebar li.active a {
  color: #fff;
}
.sidebar li:hover{
  cursor: pointer;
}
.mainCont ul li {
  margin: 28px 0;
}
.mainCont ul li i {
  display: inline-block;
  width: 8px;
  height: 10px;
  background: url(resource/Help-center_icon.png) no-repeat;
  background-size: contain;
  margin: 0 17px 0 10px;
}
.mainCont ul li p.unfold i{
  background: url(resource/Help-center_icon2.png) no-repeat;
  background-size: contain;
}
.mainCont ul li .qs {
  cursor: pointer;
}
.mainCont ul li .answer {
  width: 790px;
  line-height: 28px;
  background-color: #f6f5f5;
  padding: 13px 23px;
  margin: 15px 0 0 39px;
  box-sizing: border-box;
}
</style>

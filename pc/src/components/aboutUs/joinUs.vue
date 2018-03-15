<template>
  <div class="aboutus-wrapper">
    <div class="aboutus-main">
      <div class="joinus-container">
        <h2 class="main-title">加入我们</h2>
        <div class="recruitment-wrapper">
          <div class="recruitment-title">
            <span>职位名称</span>
            <span>工作经验</span>
            <span>工作地点</span>
          </div>
          <div class="recruitment-info">
            <div v-for="(item,index) in recruitmentInfoData" class="recruitment-list">
              <p v-bind:class="{unfold:item.isShow }" class="positionWrapper" @click="toggle(index)">
                <span class="">{{item.job}}</span>
                <span>{{item.years}}年</span>
                <span class="">{{item.address}}

                </span>
                <i class="icon-arrow"></i>
              </p>
              <div class="position-detail" v-show="item.isShow">
                <section>
                  <h3>岗位职责：</h3>
                  <div v-html='item.duty'></div>
                </section>
                <section>
                  <h3>任职要求：</h3>
                  <div v-html='item.require'></div>
                </section>
                <section>
                  <h3>申请邮箱：</h3>
                  <div v-html='item.email'></div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import config from "@/api/config";
export default {
  data() {
    return {
      recruitmentInfoData: [],
      pageIndex: 1,
      pageSize: 999
    };
  },
  methods: {
    getData() {
      let _this = this;
      let bodyData = {
        pageindex: _this.pageIndex,
        pagesize: _this.pageSize
      };
      config.data.ActionName = "GetWebJobsList";
      config.data.MessageType = "WebManager";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          // console.log(res);
          if (res.status == 200) {
            var messageData = JSON.parse(JSON.parse(res.data).Data);
            console.log(messageData);
            if (messageData) {
              _this.recruitmentInfoData = messageData.list;
              for (var i = 0; i < _this.recruitmentInfoData.length; i++) {
                //向每组问题添加isShow属性（默认答案不显示），以便控制答案的显示与隐藏
                _this.$set(_this.recruitmentInfoData[i], "isShow", false);
              }
              console.log(_this.recruitmentInfoData);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    toggle(index) {
      this.recruitmentInfoData[index].isShow = !this.recruitmentInfoData[index]
        .isShow;
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scope>
.joinus-container {
  padding: 0 26px 30px;
}
.joinus-container .main-title {
  padding-left: 0;
}
.recruitment-wrapper {
  border: 1px solid #0f599c;
  border-bottom: none;
}
.recruitment-title {
  background: #0f599c;
  color: #fff;
  text-align: center;
}
.recruitment-title span:last-child{
  margin-right: 10%;
}
.recruitment-title,
.positionWrapper {
  height: 55px;
  line-height: 55px;
  box-sizing: border-box;
}
.positionWrapper,
.position-detail {
  border-bottom: 1px solid #0f599c;
}
.position-detail {
  padding: 30px 0 0px 85px;
}
.position-detail section {
  margin-bottom: 20px;
}
.position-detail section h3 {
  font-size: 16px;
  line-height: 32px;
}
.position-detail section p {
  color: #999;
}
.position-detail section:last-child p {
  color: #333;
}
.recruitment-title span,
.positionWrapper span {
  display: inline-block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.recruitment-title span:nth-child(1),
.positionWrapper span:nth-child(1) {
  width: 20%;
}
.recruitment-title span:nth-child(2),
.positionWrapper span:nth-child(2) {
  width: 59%;
}
.recruitment-title span:nth-child(3),
.positionWrapper span:nth-child(3) {
  width: 10%;
}
.positionWrapper {
  cursor: pointer;
}
.positionWrapper .icon-arrow {
  display: inline-block;
  width: 9px;
  height: 7px;
  background: url(resource/join-us_icon2.png) no-repeat;
  background-size: contain;
  margin-left: 16px;
  margin-bottom: 24px;
}
.positionWrapper.unfold .icon-arrow {
  background: url(resource/join-us_icon.png) no-repeat;
  background-size: contain;
}
</style>


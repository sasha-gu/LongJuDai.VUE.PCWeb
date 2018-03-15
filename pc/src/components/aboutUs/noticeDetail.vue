<template>
  <div class="aboutus-main">
    <div class="notice-detail-container">
      <h2 class="main-title">{{detailData.msgtitle}}</h2>
      <p class="notice-tips">
        <i class="icon1"></i>来自：龙驹贷
        <span>
          <i class="icon2"></i>{{detailData.createtime}}</span>
      </p>
      <div class="main-content" v-html="detailData.msgtext">
      </div>
      <v-changeChapter :preMsgId="preMsgId" :nextMsgId="nextMsgId" @navchapter="getDetailData"></v-changeChapter>
    </div>

  </div>
</template>
<script>
import Router from "../../router/index";
import changeChapter from "@/components/changeChapter"
import axios from "axios";
import config from "@/api/config";
export default {
  data() {
    return {
      msgId: "",
      preMsgId: Router.history.current.query.preId,
      nextMsgId: Router.history.current.query.nextId,
      detailData: "",
    };
  },
  components:{
    "v-changeChapter":changeChapter
  },
  methods: {
    getDetailData(curId) {
      this.msgId = Router.history.current.query.MsgID;
      let _this = this;
      let MsgID = "";
      if (curId) {
        MsgID = curId;
      } else {
        MsgID = this.msgId;
      }
      let bodyData = {
        MsgID: MsgID
      };
      config.data.ActionName = "GetMessageDetail";
      config.data.MessageType = "PCPushMessage";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
             console.log(res);
            var messageData = JSON.parse(JSON.parse(res.data).Data);
            if (messageData) {
              _this.detailData = messageData;
              console.log(_this.detailData.msgtext);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.getDetailData();
  }
};
</script>
<style scoped>
.notice-detail-container {
  padding: 10px 24px 50px;
}
.notice-detail-container .main-title {
  padding-left: 0;
  line-height: 60px;
}
.notice-tips {
  font-size: 12px;
  color: #7f899a;
  line-height: 12px;
  margin-bottom: 5px;
}
.notice-tips i {
  display: inline-block;
  width: 12px;
  height: 12px;
  vertical-align: middle;
  margin-right: 3px;
}
.notice-tips i.icon1 {
  background: url(resource/announcement_icon2.png) no-repeat;
  background-size: auto;
}
.notice-tips i.icon2 {
  background: url(resource/announcement_icon1.png) no-repeat;
  background-size: auto;
}
.notice-tips {
  padding-left: 10px;
}
.notice-tips span {
  padding-left: 40px;
}
.main-content {
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  padding: 30px 25px 10px;
}

</style>


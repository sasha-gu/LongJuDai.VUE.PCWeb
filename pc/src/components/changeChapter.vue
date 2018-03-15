<template>
  <!-- <div class="pages">
        <span class="first-page" @click="goPage(1)">首页</span>
        <span class="pre" :class="{disabled:curPage==1}" @click="goPage(curPage==1?1:curPage-1)"></span>
        <span class="page-num" :class="{active:page==curPage}" v-for="page in showPageBtn" v-if="page" @click="goPage(page)">{{page}}</span>
        <span class="page-num" v-else>...</span>
        <span class="next" :class="{disabled:curPage==allpages}" @click="goPage(curPage==allpages?allpages:curPage+1)"></span>
        <span class="last-page" @click="goPage(allpages)">尾页</span>
    </div> -->
  <div class="change-chapter-wrapper">
    <p @click="goChapter(preMsg.id)" v-show="preMsgId!=''"> 上一篇：{{preMsg.title}}</p>
    <p @click="goChapter(nextMsg.id)" v-show="nextMsgId!=''">下一篇：{{nextMsg.title}}</p>
  </div>
</template>
<script>
import axios from "axios";
import config from "@/api/config";
export default {
  data() {
    return {
      curId: 1,
      preMsg: {
        title: "",
        id: ""
      },
      nextMsg: {
        title: "",
        id: ""
      }
    };
  },
  props: ["preMsgId", "nextMsgId"],
  methods: {
    getPreData() {
      let _this = this;
      let bodyData = {
        MsgID:this.preMsgId
      };
      config.data.ActionName = "GetMessageDetail";
      config.data.MessageType = "PCPushMessage";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            var messageData = JSON.parse(JSON.parse(res.data).Data);
            if (messageData) {
              _this.preMsg.title = messageData.msgtitle;
              _this.preMsg.id = messageData.id;
              // console.log(messageData);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNextData() {
      let _this = this;
      let bodyData = {
        MsgID: this.nextMsgId
      };
      config.data.ActionName = "GetMessageDetail";
      config.data.MessageType = "PCPushMessage";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            var messageData = JSON.parse(JSON.parse(res.data).Data);
            if (messageData) {
              _this.nextMsg.title = messageData.msgtitle;
              _this.nextMsg.id = messageData.id;
              // console.log(messageData);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    goChapter(curId) {
      this.curId = curId;
      console.log(curId);
     this.$emit("navchapter", this.curId);
    }
  },
  created() {
    this.getPreData();
    this.getNextData();
  }
};
</script>
<style scoped>
.change-chapter-wrapper {
  margin-top: 18px;
}
.change-chapter-wrapper p {
  line-height: 24px;
  cursor: pointer;
}
</style>


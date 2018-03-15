<template>
  <div class="aboutus-wrapper">
    <div class="aboutus-main">
      <div class="notice-container">
        <h2 class="main-title">网站公告</h2>
        <ul class="notice-list">
          <li v-for="(item,index) in noticeData " @click="linkDetail(item.id,index)" :key="item.id">
            <p class="notice-title text-ellipsis">{{item.msgtitle}}</p>
            <p class="fr">{{item.createtime}}</p>
          </li>
        </ul>
        <v-pagination :allpages="allpages" :current.sync="pageNo" @navpage="getNoticeList"></v-pagination>
      </div>

    </div>
  </div>
</template>
<script>
import Pagination from "@/components/common/pagination/pagination.vue";
import Router from "../../router/index";
import axios from "axios";
import config from "@/api/config";

export default {
  components: {
    "v-pagination": Pagination
  },
  data() {
    return {
      noticeData: [],
      curIndex: "",
      allpages: 1,
      preId: "",
      nextId: "",
      pageNo: 1
    };
  },
  methods: {
    getNoticeList(curPage) {
      let _this = this;
      let bodyData = {
        msgtype: 3,
        IsShowIndex: 0,
        pageindex: _this.pageNo,
        pagesize: 10
      };
      config.data.ActionName = "GetMessageList";
      config.data.MessageType = "PCPushMessage";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            var messageData = JSON.parse(JSON.parse(res.data).Data);
            if (messageData) {
              _this.noticeData = messageData.messagelist;
              _this.allpages = messageData.allpages;
              console.log(_this.noticeData);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getIds(index) {
      if (index == 0) {
        this.preId = "";
      } else {
        this.preId = this.noticeData[index - 1].id;
      }
      if (index == this.noticeData.length - 1) {
        this.nextId = "";
      } else {
        this.nextId = this.noticeData[index + 1].id;
      }
    },
    linkDetail(id, index) {
      this.curIndex = index;
      this.$options.methods.getIds.bind(this)(index);
      Router.push({
        path: "noticeDetail",
        query: {
          MsgID: id,
          preId: this.preId,
          nextId: this.nextId
          // index:index,
          // allRows:this.noticeData.length
        }
      });
    }
  },
  created() {
    //   // 获取公告信息列表
    this.getNoticeList();
  }
};
</script>

<style scoped>
.notice-container {
  padding-bottom: 38px;
  height: 685px;
  box-sizing: border-box;
}
.notice-list {
  padding: 0 24px;
}
.notice-list li {
  height: 45px;
  border-bottom: 1px dotted #eee;
  box-sizing: border-box;
}
.notice-list li:hover {
  cursor: pointer;
}
.notice-list li:hover p{
  color:#ff6d44;
}
.notice-list li .img-wrap {
  position: absolute;
}
.notice-list li p {
  display: inline-block;
  line-height: 45px;
  font-size: 14px;
}
.notice-list li .notice-title {
  max-width: 80%;
  margin-left: 31px;
}
.notice-list li .notice-title:before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-right: 23px;
  border-radius: 50%;
  background: #0f599c;
  vertical-align: middle;
}
</style>

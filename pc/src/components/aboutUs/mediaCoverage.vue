<template>
  <div class="aboutus-wrapper">
    <div class="aboutus-main">
      <div class="notice-container">
        <h2 class="main-title">媒体报道</h2>
        <ul class="notice-list">
          <li v-for="item in noticeData ">
            <p class="notice-title text-ellipsis">{{item.title}}</p>
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
      pageNo: 1
    };
  },
  methods: {
    getNoticeList(curPage) {
      let _this = this;
      let bodyData = {
        pageindex: _this.pageNo,
        pagesize: 10
      };
      config.data.ActionName = "GetWebNewsList";
      config.data.MessageType = "WebManager";
      config.data.Data = JSON.stringify(bodyData);
      axios
        .post("", {}, config)
        .then(function(res) {
          console.log(res);
          if (res.status == 200) {
            var messageData = JSON.parse(JSON.parse(res.data).Data);
            if (messageData) {
              _this.noticeData = messageData.list;
              _this.allpages = messageData.allpages;
              console.log(_this.noticeData);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.getNoticeList();
  }
};
</script>
<style scoped>
.notice-container {
  padding-bottom: 38px;
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
.pages {
  margin-top: 87px;
  text-align: center;
}
.pages span {
  display: inline-block;
  padding: 0 14px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  font-weight: bold;
  background: #e7e5e5;
  vertical-align: middle;
}
.pages span.active {
  background: #ff9420;
}
.pages .pre {
  background: #e7e5e5 url(./resource/page-pre.png) no-repeat;
  background-size: auto;
  background-position: center center;
}
.pages .next {
  background: #e7e5e5 url(./resource/page-next.png) no-repeat;
  background-size: auto;
  background-position: center center;
}
</style>

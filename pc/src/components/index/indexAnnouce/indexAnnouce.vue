<template id="">
<div class="honor_news wrapper clearfix">
  <div class="news fl first">
    <div class="newsTitle clearfix">
      <p class="fl">媒体报道</p>
      <!-- <div class="more fr"><a href="">更多>></a></div> -->
    </div>
    <ul>
      <li class="clearfix" v-for="ulletin in ulletinList" >
        <a href="">
          <div class="dot fl"></div>
          <div class="newsTit fl" :title="ulletin.title">{{ulletin.title}}</div>
          <div class="date fr">{{ulletin.updatetime}}</div>
        </a>
      </li>
    </ul>
  </div>
  <div class="news fl ">
    <div class="newsTitle clearfix">
      <p class="fl">网站公告</p>
      <!-- <div class="more fr"><a href="">更多>></a></div> -->
    </div>
    <ul>
      <li class="clearfix" v-for="list in NewsList">
        <router-link :to="{
            path: '/noticeDetail',
            query: {
              MsgID:list.id
            }
        }">
          <a href="javascript:void(0);">
            <div class="dot fl"></div>
            <div class="newsTit fl" :title="list.msgtitle">{{list.msgtitle}}</div>
            <div class="date fr">{{list.createtime}}</div>
          </a>
        </router-link>

      </li>
    </ul>
  </div>
</div>
</template>
<script>
import axios from "axios";
import config from "@/api/config";
export default {
  data() {
    return {
      "NewsList": [],
      "ulletinList": []
    }
  },
  methods: {
    // 获取首页的网站公告
    _getNewsList() {
      let that = this;
      let data = {
        msgtype: 3,
        pageindex: 1,
        pagesize: 5
      };
      config.data.ActionName = "GetMyMessageList";
      config.data.MessageType = "PCPushMessage";
      config.data.Data = JSON.stringify(data);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            if (res.data) {
              let newsList = JSON.parse(res.data).Data;
              let newsResult = JSON.parse(newsList).messagelist;
              if (newsResult) {
                that.NewsList = newsResult;
              }
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    // 媒体报告
    _getulletinList() {
      let that = this;
      let data = {
        pageindex: 1,
        pagesize: 5
      };
      config.data.ActionName = "GetWebNewsList";
      config.data.MessageType = "WebManager";
      config.data.Data = JSON.stringify(data);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            if (res.data) {
              let ulletin = JSON.parse(JSON.parse(res.data).Data);
              if (ulletin) {
                  that.ulletinList = ulletin.list;
              }
            }
          }

        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    this._getulletinList();
    this._getNewsList();

  }

}
</script>
<style >
@import "./indexAnnouce.css"
</style>

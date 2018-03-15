<template>
  <div class="notice">
    <div class="announce-center clearfix">
        <div class="fl tit">
          最新公告
        </div>
        <div class="announce-content fl">
          <ul class="clearfix ">
            <li v-for="item in Announce" class="fl">
              <router-link :to="{  path: '/noticeDetail',
                query: {
                  MsgID:item.id
                }}">{{ item.msgtitle }}</router-link>
            </li>
          </ul>
        </div>
        <router-link to="/notice" class="more fr">更多>></router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from "@/api/config";
export default {
  beforeMount() {
    let bodyData={msgtype:3,IsShowIndex:1,IsShowIndex:0,pageindex:1,pagesize:2};
    config.data.ActionName = 'GetMyMessageList';
    config.data.MessageType = 'PCPushMessage';
    config.data.Data = JSON.stringify(bodyData);
    var _this = this;
    axios
      .post('', {}, config)
      .then(function(res) {
          //  console.log(_this.Announce)
          if (res.status == 200) {
            var messageData=JSON.parse(JSON.parse(res.data).Data);
            if(messageData){
              _this.Announce=messageData.messagelist;
            }
          }

      })
      .catch(function(err) {
        console.log(err);
      });
  },
  data() {
    return {
      Announce:[]
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
.notice{
  background-color: #fff;
  border-bottom:1px solid #f5f5f5;
  height:35px;
  line-height: 35px;
}
.announce-center{
  width:1100px;
  margin:0 auto;
}
.tit{
  width:77px;
  height:19px;
  background: url(./resource/announceIcon.png);
  color:#666666;
  text-indent: 24px;
  line-height: 19px;
  font-size: 12px;
  margin-right: 10px;
  margin-top: 8px;
}
.announce-content li{
  width:230px;
  text-align: left;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 110px;
}
</style>

<template>
  <div class="aboutus-wrapper">
    <div class="aboutus-main">
      <div class="contactus-container">
        <h2 class="main-title">联系我们</h2>
        <b-map-component></b-map-component>
        <div class="info-wrapper clearfix">
          <div class="left fl">
            <p>
              <i></i> 公司地址：上海市徐汇区宜山路1009号创新大厦6L</p>
            <p>
              <i></i> 新浪微博：http://weibo.com/u/5886503455</p>
          </div>
          <div class="right fr">
            <p>
              <i></i>固定电话：021-54260381（9:00--18:00）</p>
            <p>
              <i></i>客服电话：4000-119-888（9:00--21:00）</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BMapComponent from "@/components/aboutUs/BMap.vue";
export default {
  data() {
    return {};
  },
  components: {
    "b-map-component": BMapComponent
  },
  methods: {}
};
</script>
<style scope>
.info-wrapper {
  width: 75%;
  margin: 0 auto;
  padding: 40px 0 100px;
}
.info-wrapper p {
  text-align: left;
  line-height: 30px;
  font-size: 16px;
}
.info-wrapper p i {
  display: inline-block;
  vertical-align: middle;
}
.info-wrapper .left p:first-child i {
  width: 48px;
  height: 53px;
  background: url(./resource/Contact-us_icon1.png) no-repeat;
  background-size: 48px auto;
}
.info-wrapper .right p:first-child i {
  width: 51px;
  height: 53px;
  background: url(./resource/Contact-us_icon2.png) no-repeat;
  background-size: 51px auto;
}
.info-wrapper .left p:last-child i {
  width: 56px;
  height: 57px;
  background: url(./resource/Contact-us_icon3.png) no-repeat;
  background-size: 56px auto;
}
.info-wrapper .right p:last-child i {
  width: 55px;
  height: 55px;
  background: url(./resource/Contact-us_icon4.png) no-repeat;
  background-size: 55px auto;
}
</style>


<template>
  <div class="footer">
    <div class="footer-center clearfix">
      <div class="clearfix">
        <div class="page fl">
          <ul class="fl leftPage">
            <li>
              <router-link to="/aboutusIndex">公司简介</router-link>
            </li>
            <li>
              <router-link to="/notice">网站公告</router-link>
            </li>
            <li>
              <router-link to="/contactus">联系我们</router-link>
            </li>
          </ul>
           <ul class="fl rightPage">
            <li>
              <router-link to="/helpcenter">帮助中心</router-link>
            </li>
            <li>
              <router-link to="/">安全保障</router-link>
            </li>
            <li>
              <router-link to="/">在线客服</router-link>
            </li>
          </ul>
        </div>
        <div class="line fl"></div>
        <div class="twoCode fl ">
            <div class="codePic leftCode">
                <img src="./resource/downloadCode.png" alt="">
                <p>关注订阅号</p>
            </div>
             <div class="codePic">
                <img src="./resource/weixinCode.png" alt="">
                <p>关注订阅号</p>
            </div>
        </div>
        <div class="line fl"></div>
        <div class="service fl">
          <div class="tit">客服热线</div>
          <div class="telNumber"></div>
          <div class="tit">服务时间</div>
          <div class="time">（9:00－21:00）</div>
        </div>
      </div>
    </div>
    <div class="copyRight">
        <div class="desc">Copyright © 2017 LongJuBank 
           
          <a href="http://www.miitbeian.gov.cn/" target="_blank" class="icpNumber">沪ICP备16025036号</a>
        市场有风险，投资需谨慎</div>
      <div class="securityAlliance">
          <!--互联网金融行业认证代码开始-->
          <a id="_pingansec_bottomimagelarge_p2p" href="http://si.trustutn.org/info?sn=612171128000616244164&amp;certType=4"><img src="http://v.trustutn.org/images/cert/p2p_bottom_large_img.jpg"></a>
          <!--互联网金融行业认证代码结束-->
            </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
@import "./footer.css";
</style>

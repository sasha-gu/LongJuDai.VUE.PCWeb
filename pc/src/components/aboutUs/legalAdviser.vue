<template>
  <div class="aboutus-wrapper">
    <div class="aboutus-main">
      <div class="legalAdviser-container">
        <h2 class="main-title">法律顾问</h2>
        <div class="content clearfix">
          <div class="left fl">
            <img src="./resource/law_img_ly.png" alt="">
            <img src="./resource/law_img.png" alt="" class="law-img">
            <p class="name">陆阳 LU YANG</p>
            <div class="intro">
              <p>执业经历：2008年，取得法律资格证书。</p>
              <p>华城律师事务所合伙人律师，毕业于北京大学法律硕士。</p>
              <p><span class="sub-title">业务领域：</span></br>
              2008年加入华城，主要业务领域包括证券与金融、投资并购业务、公司业务、商事争议解决。</p>
            </div>
          </div>
          <div class="right fr">
            <img src="./resource/law_img_hc.png" alt="">
            <img src="./resource/law_img.png" alt="" class="law-img">
            <p class="name">华城律师事务所</p>
            <div class="intro">
              <p>北京市华城律师事务所经中华人民共和国司法部批准于1999年6月成立，系由原对外贸易经济合作部长城律师事务所多位资深律师共同发起创立的合伙制律师事务所，为司法部直管所。</p>
              <p>华城律师事务所总部设在北京，在上海、多伦多设有分所。在深圳、广州、珠海、苏州、杭州等地设有联络办公机构。总部现有律师一百余名及律师助理五十余名。华城所总部下设七个专业部门，即金融证券部、公司部、知识产权部、建设工程与房地产部、文体与卫生部、诉讼仲裁部、劳资部。</p>
              <p>华城律所倡导“服务于金融机构，服务于金融业务，以法律手段维护金融机构利益，促进金融业务发展”的理念。2014年，华城律所成为北京市网贷协会会员单位及合规委员单位。华城陆阳律师荣获IFC1000互联网千人会评选的“2016年度互联网金融十大律师”。2017获聘北京市金融局法律服务机构。2014-2016年连续三年荣获《中国企业报》评选的“新三板十大最值得推荐律师事务所”奖项。</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.content {
  padding: 0 90px 135px;
  background: url(./resource/law_bg.png) no-repeat;
  background-position: top center;
  background-size: auto;
}
.content>div {
  width: 45%;
  padding-top: 35px;
  text-align: center;
}
.content>div img{
  display: block;
  margin: 0 auto;
}
.content>div p{
  text-align: left;
  margin-bottom:10px;
}
.content>div .sub-title{
  color:#0f599c;
}
.content>div .name{
  margin: 30px 0;
  font-size: 18px;
  color:#f6772c;
  text-align: center;
}
.content>div img.law-img{
  margin-top:14px;
}
.content>div.right{
  padding-top:114px;
}
</style>


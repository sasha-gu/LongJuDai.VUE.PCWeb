<template>
    <div class="aboutus-wrapper">
        <div class="aboutus-main">
            <div class="partner-container">
                <h2 class="main-title">合作伙伴</h2>
                <ul class="partner-list">
                    <li v-for="item in partnerData ">
                        <div class="img-wrap">
                            <img :src="item.src" alt="">
                        </div>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      partnerData: [
        {
          src: "../../../static/aboutUs/partners_shyh.png",
          content:
            "上海银行股份有限公司(简称“上海银行”)成立于1995年12月29日，总行位于上海。上海银行以“精品银行”为战略愿景，以“精诚至上，信义立行”为核心价值观，近年来通过推进专业化经营和精细化管理，着力在中小企业、财富管理和养老金融、金融市场、跨境金融、在线金融等领域培育和塑造经营特色，不断增强可持续发展能力。"
        },
        {
          src: "../../../static/aboutUs/partners_hftx.png",
          content:
            "汇付天下有限公司于2006年7月成立，投资额近10亿元人民币，核心团队由中国金融行业资深管理人士组成，致力于为中国小微企业、金融机构、行业客户和投资者提供金融支付、账户托管、投资理财等综合金融服务。总部设于上海，并在北京、广州、深圳、成都、武汉、济南、南昌等30多个城市都设有分公司，旗下有汇付数据、汇付科技等子公司。"
        },
        {
          src: "../../../static/aboutUs/partners_ls.png",
          content:
            "北京市华城律师事务所经中华人民共和国司法部批准于1999年6月成立，系由原对外贸易经济合作部长城律师事务所多位资深律师共同发起创立的合伙制律 师事务所，为司法部直管所。华城律师事务所总部设在北京，在上海、多伦多设有分所。在深圳、广州、珠海、苏州、杭州等地设有联络办公机构。总部现有律师一百余名及律师助理五十余名。华城所总部下设七个专业部门，即金融证券部、公司部、知识产权部、建设工程与房地产部、文体与卫生部、诉讼仲 裁部、劳资部。"
        },
        {
          src: "../../../static/aboutUs/partners_aly.png",
          content:
            "蜜蜂数据，隶属于盈灿集团，是国内首家分布式征信查询系统平台，该平台实行用户自行管理自有数据，系统仅负责通讯、对接，不存储任何数据的分布式征信系统，既保证了数据的可靠性、全面性，又保证了数据的安全性。蜜蜂数据通过连接多个P2P平台，形成了全面的联防监控，使老赖无处可藏；同时因为连接多家平台，用户也可以一键查询黑名单、个人信用分、央行报告等信息，在满足用户的同时，使得征信概念快速普及。"
        } ,
        {
          src: "../../../static/aboutUs/partners_560.png",
          content:
            "560交运配货网所属公司——上海拓景信息科技有限公司成立于2008年，是国内最具实力的物流信息化解决方案提供商之一，数年来，公司秉承“推动中国干线物流信息化进程”的行业理念，立足丰富的行业探索经验，并以敏锐的市场洞察力，致力于中国O2O智慧物流的产品研发和推广，以期效用最大化盘活中国城际干线运力池，引领行业力量从零散走向整合之路。从微观层面，提升物流从业者生活品质，从宏观层面，实现干线物流在全社会产业链中的行业增值。"
        }    
      ]
    };
  }
};
</script>
<style scoped>
.partner-list li {
  padding: 34px 57px;
  border-top: 1px dotted #eee;
  box-sizing: border-box;
}
.partner-list li .img-wrap {
  position: absolute;
}
.partner-list li p {
  margin-left: 278px;
  line-height: 24px;
  font-size: 16px;
}
</style>


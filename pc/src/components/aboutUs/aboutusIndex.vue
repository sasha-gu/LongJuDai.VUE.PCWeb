<template>
    <div class="aboutus-wrapper">
        <div class="aboutus-main">
            <div class="aboutus-index-container">
                <h2>公司简介</h2>
                <p>龙驹贷，是由龙驹集团旗下上海垄泰信息科技有限公司运营，专注于提供网络借贷中介信息服务的平台。</p>
                <p>上海垄泰信息科技有限公司2016年于上海注册成立，注册资金10000万元，是一家深耕国内物流行业供应链金融服务的互联网信息服务公司。公司致力于金融发展与信息技术创新，以健全的风险管控体系为基础，旨在通过互联网为物流六大人群（车主、司机、货运部、货运公司、个体户、企业）搭建 一个公平、透明、稳定、高效的信息服务平台，提供全方位空间互动服务，帮助实现便捷高效的低成本融资和财富增值。目前已对接上海银行资金存管。
                </p>
                <h2 class="team">团队介绍</h2>
                <div class="img-wrap">
                    <img src="./resource/team_person_zz.png" alt="">
                    <img src="./resource/team_person_qym.png" alt="">
                    <img src="./resource/team_person_xjf.png" alt="">
                </div>
                <div class="team-info-wrap">
                    <ul class="team-info clearfix">
                        <li v-for="item in teamData" class="fl">
                            <p class="name">{{item.name}}</p>
                            <p class="position"><i class="border-before"></i><span>{{item.position}}</span><i class="border-after"></i></p>
                            <p class="major">{{item.major}}</p>
                            <p class="introduce">{{item.introduce}}
                            </p>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      teamData: [
        {
          name: "郑之",
          position: "总经理",
          major: "专业领域：互联网产品及运营",
          introduce:
            "多年兴业银行工作经历，丰富的银行信贷业务、理财业务经验，大量的银行机构资源。荣获“2017中国诚信金融杰出人物”称号。"
        },
        {
          name: "裘园敏",
          position: "风控总监",
          major: "专业领域：互联网金融风控",
          introduce: "多年传统行业金融从业经验，涉及股权投资、私募基金等产品的调研、设计、落地等业务。浙江大学计算机系"
        },
        {
          name: "徐建富",
          position: "技术总监",
          major: "专业领域：互联网技术研发、系统架构",
          introduce:
            "超十年的技术研发经历，负责携程旅游产品项目的设计与开发。服务过宝付、威游等大中型科技公司，负责数据挖掘、大数据处理、网页分析与抓取、支付牌照申请等研发管理工作。"
        }
      ]
    };
  }
};
</script>

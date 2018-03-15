<template>
    <div class="main">
        <!--企业信息begin-->
        <div class="organizational-structure ">
            <div class="title-wrap">
                <p class="title">组织架构</p>
                <i class="dot"></i>
            </div>

            <img src="../resource/jiagoutu.png" height="274" width="1041" alt="" />
        </div>
        <div class="enterprise-information">
            <div class="title-wrap">
                <p class="title">企业信息</p>
                <i class="dot"></i>
            </div>
            <table class="main-table">
                <tr>
                    <td class="odd">机构全称：</td>
                    <td class="even">上海垄泰信息技术有限公司</td>
                    <td class="odd">公司注册资本：</td>
                    <td class="even">10000万元</td>
                </tr>
                <tr>
                    <td class="odd">注册地址：</td>
                    <td class="even">上海市徐汇区宜山路1009号5层502单元</td>
                    <td class="odd">实缴注册资本：</td>
                    <td class="even">2340万元</td>
                </tr>
                <tr>
                    <td class="odd">成立时间：</td>
                    <td class="even">2016年5月23日</td>
                    <td class="odd">法定代表人：</td>
                    <td class="even">郑之 </td>
                </tr>
                <tr>
                    <td class="odd">联系方式：</td>
                    <td class="even">客服热线：4000-119-888</br>固话：021-54651366</td>
                    <td class="odd">经营场所：</td>
                    <td class="even">上海市徐汇区宜山路1009号6L</td>
                </tr>
                <tr>
                    <td class="odd">统一社会信用代码：</td>
                    <td class="even">91310113MA1GKHYC3C</td>
                    <td class="odd">公司经营期限：</td>
                    <td class="even">2016年05月23日至2036年05月22日</td>
                </tr>
                <tr>
                    <td class="odd">公司经营状态：</td>
                    <td class="even">开业</td>
                    <td class="odd">分支机构信息：</td>
                    <td class="even">无</td>
                </tr>
                <tr>
                    <td class="odd">公司股东名称：</td>
                    <td class="even">杭州大宇创业投资有限公司；浙江龙驹信息技术有限公司</td>
                    <td class="odd">公司股东占股比例：</td>
                    <td class="even">杭州大宇创业投资有限公司30%；浙江龙驹信息技术有限公司70%</td>
                </tr>
                <tr>
                    <td class="odd">资金存管银行：</td>
                    <td class="even">上海银行股份有限公司</td>
                    <td class="odd">资金存管上线时间：</td>
                    <td class="even"></td>
                </tr>
                <tr>
                    <td class="odd">经营范围：</td>
                    <td colspan="3" class="even">
                        从事信息技术、计算机网络专业领域内的技术开发、技术咨询、技 术服务、技术转让；计算机系统集成及软硬件的开发与销售、数据处理服务；电子商务（不得从事增值电信、金融业务）；市场信息咨询与调查（不得从事社会调查、社会调研、民意调查、民意测验）；会展服务；企业管理咨询；企业形象策划；广告的设计、制作。 【依法须经批准的项目，经相关部门批准后方可开展经营活动】
                    </td>
                </tr>
                <tr>
                    <td class="odd"> 注册协议模板：</td>
                    <td colspan="3" class="even">
                        <router-link to="/registerPro" class="view-protocol text-blue" target="_blank">点击查看</router-link>
                    </td>
                </tr>
                <tr>
                    <td class="odd">重要融资信息：</td>
                    <td colspan="3" class="even">
                        平台目前无重要融资信息
                    </td>
                </tr>
                <tr>
                    <td class="odd">从业人员概况：</td>
                    <td colspan="3" class="even">
                        截至目前，从业人员约66人。其中25岁以下从业人员约24人，25-4 从业人员约42人，整体从业人员偏年轻化；本科以下从业人员约30人，本科从业人员约34人，硕士及以上从业人员约2人。
                    </td>
                </tr>
                <tr>
                    <td class="odd">与第三方担保机构合作情况：</td>
                    <td colspan="3" class="even"> 浙江贯礼商贸有限公司，担保方式为连带责任保证担保。
                    </td>
                </tr>
            </table>
        </div>
        <!--企业信息end-->
    </div>
</template>
<script>
export default {
  data() {
    return {
        title:"企业信息"
    };
  },
  methods:{
      getTitle(){//将当前页面title传给父组件
        this.$emit('transforTitle',this.title)
      }
  },
  created() {
      this.getTitle();
  }
};
</script>

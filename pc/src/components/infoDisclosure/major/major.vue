<template>
    <div class="main">
        <div class="majorIssues">
            <div class="title-wrap">
                <p class="title">重大事项</p>
                <i class="dot"></i>
            </div>
            <table class="main-table">
                <tr>
                    <td class="odd">减资、合并、分立、解散或申请破产：</td>
                    <td class="even">无</td>
                    <td class="odd">公司依法进入破产程序：</td>
                    <td class="even">无</td>
                </tr>
                <tr>
                    <td class="odd">公司被责令停业、整顿、关闭</td>
                    <td class="even">无</td>
                    <td class="odd">公司涉及重大诉讼、仲裁，或涉嫌违法违规被有权机关调查，或受到刑事处罚、重大行政处罚：</td>
                    <td class="even">无</td>
                </tr>
                <tr>
                    <td class="odd">公司法定代表人、实际控制人、主要负责人、董事、监事、高级管理人员涉及重大诉讼、仲裁，或涉嫌违法违纪被有权机关调查，或受到刑事处罚、重大行政处罚，或被采取强制措施：</td>
                    <td class="even">无</td>
                    <td class="odd">公司主要或者全部业务陷入停顿：</td>
                    <td>无 </td>
                </tr>
                <tr>
                    <td class="odd">存在欺诈、损害出借人利益等其他影响网络借贷信息中介机构经营活动的重大事项：</td>
                    <td class="even">无</td>
                    <td class="odd">公司法定代表人、实际控制人、控股股东、主要负责人、董事、监事、高级管理人员的变更信息：</td>
                    <td class="even">无</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        title:"重大事件"
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

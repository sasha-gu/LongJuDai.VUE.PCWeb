<template>
    <div class="main">
        <div class="policy clearfix">
            <div>
                <a href="../../../../static/policy/networkLaw.pdf" target="_blank">
                    <i></i>
                    <p>中华人民共和国网络安全法</p>
                </a>
            </div>
            <div>
                <a href="../../../../static/policy/advertisingLaw.pdf" target="_blank">
                    <i></i>
                    <p>中华人民共和国广告法</p>
                </a>
            </div>
            <div>
                <a href="../../../../static/policy/signLaw.pdf" target="_blank">
                    <i></i>
                    <p>中华人民共和国电子签名法</p>
                </a>
            </div>
            <div class="item4">
                <a href="../../../../static/policy/antiMoneyLaunderingLaw.pdf" target="_blank">
                    <i></i>
                    <p>中华人民共和国网反洗钱法</p>
                </a>
            </div>
            <div>
                <a href="../../../../static/policy/approach.pdf" target="_blank">
                    <i></i>
                    <p>网络借贷信息中介机构业务活动管理暂行办法</p>
                </a>
            </div>
            <div>
                <a href="../../../../static/policy/guide.pdf" target="_blank">
                    <i></i>
                    <p>网络借贷资金存管业务指引</p>
                </a>
            </div>
            <div>
                <a href="../../../../static/policy/businessApproach.pdf" target="_blank">
                    <i></i>
                    <p>上海市网络借贷信息中介机构业务管理实施办法</p>
                </a>
            </div>
            <div class="item8">
                <a href="../../../../static/policy/programme.pdf" target="_blank">
                    <i></i>
                    <p>上海市互联网金融风险专项整治工作实施方案</p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        title:"政策法规"
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

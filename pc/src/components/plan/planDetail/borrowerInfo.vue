<template>
	<div class='borrower'>
		<p>借款人信息</p>
		<ul class="clearfix  borrowerlist">
			<li class="fl">
				<img src="./resource/particulars_icon1.png" height="28" width="28" alt="">实名认证
			</li>
			<li class="fl"><img src="./resource/particulars_icon1.png" height="28" width="28" alt="">个人资料</li>
			<li class="fl"><img src="./resource/particulars_icon1.png" height="28" width="28" alt="">工作资料</li>
			<li class="fl"><img src="./resource/particulars_icon1.png" height="28" width="28" alt="">560渠道认证</li>
			<li class="fl"><img src="./resource/particulars_icon1.png" height="28" width="28" alt="">助贷人认证</li>
			<li class="fl"><img src="./resource/particulars_icon1.png" height="28" width="28" alt="">联系人认证</li>
		</ul>
		<p>借款用途</p>
		<ul class='usageOfLoan'>
			<li><i>借款标题</i>
				<span v-if='mortgagor.bortitle&&mortgagor.bortitle!=""'> {{mortgagor.bortitle}}</span>
				<span v-else>暂无数据</span>
			</li>
			<li><i>运单号</i>
				<span v-if='mortgagor.bororderid&&mortgagor.bororderid!=""'> {{mortgagor.bororderid}}</span>
				<span v-else>暂无数据</span>
			</li>                          
			<li><i>交易时间</i>
				<span v-if='mortgagor.succtime&&mortgagor.succtime!=""'> {{mortgagor.succtime}}</span>
				<span v-else>暂无数据</span>
			</li>                      
			<li><i>交易金额</i>
				<span v-if='mortgagor.boramount&&mortgagor.boramount!=""'> {{mortgagor.boramount}}元</span>
				<span v-else>暂无数据</span>
			</li>                       
			<li><i>发货地址</i>
				<span v-if='mortgagor.orderdesc&&mortgagor.orderdesc!=""'> {{mortgagor.orderdesc}}</span>
				<span v-else>暂无数据</span>
			</li>
			<li><i>发货信息</i>
				<span v-if='mortgagor.purposes&&mortgagor.purposes!=""'> {{mortgagor.purposes}}</span>
				<span v-else>暂无数据</span>
			</li>                      
			<li><i>借款协议</i><span>查看<a href="">《借款协议》</a></span></li>
			<li><i>风险告知</i><span>查看<a href="">《风险揭示书》</a></span></li>
		</ul>
	</div>
</template>
<script>
	export default {
		props:['mortgagor'],
		data(){
			return{

			}
		}
	}
</script>
<style scoped>
	@import "./borrowerInfo.css";
</style>
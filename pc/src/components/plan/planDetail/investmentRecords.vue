<template>
	<div class='investmentRecords'>
		<ul class='clearfix title'>
			<li class='fl'>投资人</li>
			<li class='fl'>投资金额</li>
			<li class='fl'>投资时间</li>
		</ul>
		<ul class='clearfix'>
			<li class='fl'>洪**</li>
			<li class='fl'>50000.00</li>
			<li class='fl'>2018-02-09 12:56:45</li>
		</ul>
		<ul class='clearfix'>
			<li class='fl'>洪**</li>
			<li class='fl'>50000.00</li>
			<li class='fl'>2018-02-09 12:56:45</li>
		</ul>
		<ul class='clearfix'>
			<li class='fl'>洪**</li>
			<li class='fl'>50000.00</li>
			<li class='fl'>2018-02-09 12:56:45</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
.investmentRecords{
	padding-bottom:40px;
}
.investmentRecords .title{
	background: #fafafa;
}
	.investmentRecords li{
		width:33.33%;
		text-align: center;
		line-height: 45px;
		height:45px;
	}
</style>
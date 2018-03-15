<template>
  <div class="indexAdvantage">
          <div class="advantage-center clearfix">
              <dl>
                  <dt><img src="./resource/home_ic_fk01.png"></dt>
                  <dd class="first">专业风控</dd>
                  <dd>与合作机构多重风控保障</dd>
              </dl>
              <dl class="advantage2">
                  <dt><img src="./resource/home_ic_fk02.png"></dt>
                  <dd class="first">安全保障</dd>
                  <dd>上海银行资金存管流转全透明</dd>
              </dl>
              <dl class="advantage3">
                  <dt><img src="./resource/home_ic_fk03.png"></dt>
                  <dd class="first">灵活稳健</dd>
                  <dd>产品丰富灵活收益持续稳健</dd>
              </dl>
              <dl>
                  <dt><img src="./resource/home_ic_fk04.png"></dt>
                  <dd class="first">优质项目</dd>
                  <dd>与合作机构多重风控保障</dd>
              </dl>
          </div>
      </div>
</template>

<script>
 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.indexAdvantage{
  background-color: #fff;
  border-bottom:1px solid #f5f5f5;
  padding: 32px 0;
}
.advantage-center{
  width:1100px;
  margin:0 auto;
}
.advantage-center dl {
    width:267px;
    float: left;
    zoom: 1;
    /* padding-right: 30px; */
}
.advantage-center dl.advantage2,dl.advantage2{
  padding-right: 30px;
}
.advantage-center dl dt {
    width: 69px;
    height: 69px;
    float: left;
    display: block;
    -webkit-transition: -webkit-transform .1s;
    transition: -webkit-transform .1s;
    transition: transform .1s;
    transition: transform .1s,-webkit-transform .1s;
    margin-right: 10px;
}
.advantage-center dl dt img {
    height: 69px;
    width: 69px;
}
.advantage-center dd{
    color: #999999;
    font-size: 14px;
}
.advantage-center dd.first{
  color: #333;
  font-size: 18px;
  padding: 10px 0 6px;
}
</style>

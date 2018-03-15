<template>
    <div class="main data">
        <div class="top-content">
            <ul class="clearfix">
                <li class="item1">
                    <i></i>
                    <p class="text">累计成交金额(元)</p>
                    <p class="num">363210800.00</p>
                </li>
                <li class="item2">
                    <i></i>
                    <p class="text">累计用户收益(元)</p>
                    <p class="num">7040204.44</p>
                </li>
                <li class="item3">
                    <i></i>
                    <p class="text">累计注册数</p>
                    <p class="num">24265</p>
                </li>
            </ul>
        </div>
        <div class="main-content">
            <div class="module1">
                <div class="title-wrap">
                    <p class="title">投资数据统计</p>
                    <i class="dot"></i>
                </div>
                <ul class="clearfix">
                    <li class="item1">
                        <i></i>
                        <p class="text">累计出借笔数</p>
                        <p class="num">19037</p>
                    </li>
                    <li class="item2">
                        <i></i>
                        <p class="text">人均累计出借金额(元)</p>
                        <p class="num">43524.36 </p>
                    </li>
                    <li class="item3">
                        <i></i>
                        <p class="text">笔均出借金额(元)</p>
                        <p class="num">19079.20</p>
                    </li>
                </ul>
            </div>
            <div class="module2">
                <div class="title-wrap">
                    <p class="title">借款数据统计</p>
                    <i class="dot"></i>
                </div>
                <ul class="clearfix">
                    <li class="item1">
                        <i></i>
                        <p class="text">累计借款笔数</p>
                        <p class="num">3725</p>
                    </li>
                    <li class="item2">
                        <i></i>
                        <p class="text">待偿金额(元)</p>
                        <p class="num">176880781.14 </p>
                    </li>
                    <li class="item3">
                        <i></i>
                        <p class="text">项目逾期率</p>
                        <p class="num">0
                            <span>%</span>
                        </p>
                    </li>
                    <li class="item4">
                        <i></i>
                        <p class="text">逾期金额</p>
                        <p class="num">0</p>
                    </li>
                    <li class="item3">
                        <i></i>
                        <p class="text">金额逾期率</p>
                        <p class="num">0
                            <span>%</span>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="echarts-wrapper">
                <div class="title-wrapper clearfix">
                    <p class="fl title">(Y)轴为
                        <span>交易数据</span>&nbsp;&nbsp;(X)轴为时间</p>
                    <p class="fr">
                        <select name="" id="" class>
                            <option value="">2017</option>
                            <option value="">2016</option>
                            <option value="">2015</option>
                        </select>
                    </p>
                </div>
                <div id="echarts1"></div>
                <div class="title-wrapper clearfix">
                    <p class="fl title">(Y)轴为
                        <span>用户收益</span>&nbsp;&nbsp;(X)轴为时间</p>
                    <p class="fr">
                        <select name="" id="" class>
                            <option value="">2017</option>
                            <option value="">2016</option>
                            <option value="">2015</option>
                        </select>
                    </p>
                </div>
                <div id="echarts2"></div>
            </div>

        </div>
    </div>
</template>
<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/line");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "hello",
  data() {
    return {
      title:"数据展示"
    };
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
  },
  methods: {
     getTitle(){//将当前页面title传给父组件
        this.$emit('transforTitle',this.title)
      },
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("echarts1"));
      // 绘制图表
      myChart.setOption({
        tooltip: { trigger: "axis" },
        color: "#1e62a1",
        grid: {
          show: true,
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          min: "dataMin",
          axisLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#ccc"
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["#fff", "#f5f5f5"]
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted"
            }
          },
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          show: false
          //    type: "value"
        },
        series: [
          {
            name: "交易值",
            type: "line",
            stack: "总量",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#dfe9f2" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#f4f8fb" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [100, 120, 136, 140, 150, 160, 168, 176, 189, 210, 220, 230]
          }
        ]
      });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("echarts2"));
      // 绘制图表
      myChart.setOption({
        tooltip: { trigger: "axis" },
        color: "#1e62a1",
        grid: {
          show: true,
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          min: "dataMin",
          axisLine: {
            show: true,
            lineStyle: {
              type: "dotted",
              color: "#ccc"
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ["#fff", "#f5f5f5"]
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dotted"
            }
          },
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          show: false
          //    type: "value"
        },
        series: [
          {
            name: "交易值",
            type: "line",
            stack: "总量",
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#dfe9f2" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#f4f8fb" // 100% 处的颜色
                  }
                ],
                globalCoord: false // 缺省为 false
              }
            },
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            data: [100, 120, 136, 140, 150, 160, 168, 176, 189, 210, 220, 230]
          }
        ]
      });
    }
  },
  created(){
    this.getTitle();
  }
};
</script>
<style scoped>
.echarts-wrapper {
  width: 1100px;
  background: #f5f5f5;
}
.echarts-wrapper .title-wrapper {
  padding-top: 75px;
}
.echarts-wrapper .title-wrapper .title {
  font-size: 14px;
  color: #555;
}
.echarts-wrapper .title-wrapper .title span {
  color: #0e599c;
  font-size: 15px;
}
.echarts-wrapper .title-wrapper select {
  width: 120px;
  height: 36px;
  border-color: #e5e5e5;
  text-indent: 10px;
  color: #0e599c;
}
.echarts-wrapper .title-wrapper select option {
  color: #0e599c;
}
#echarts1,
#echarts2 {
  height: 400px;
  padding-bottom: 75px;
}
#echarts1 {
  border-bottom: 1px dotted #e5e5e5;
}
</style>


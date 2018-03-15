<template>
  <div id="allmap"></div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  mounted() {
    this.createMap();
  },
  methods: {
    createMap: function() {
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(121.407803, 31.176626); // 创建点坐标
      map.centerAndZoom(point, 18); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      map.enableDoubleClickZoom(true);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      //创建信息窗口
      var opts = {
        width: 230, //信息窗口宽度
        height: 70 //信息窗口高度
      };
      var infoWindow = new BMap.InfoWindow(
        "公司名称：龙驹贷<br/>公司地址：上海市徐汇区宜山路1009号创新大厦6楼",
        opts
      ); //创建信息窗口对象
      map.openInfoWindow(infoWindow, map.getCenter()); //打开信息窗口
    }
  }
};
</script>

<style scope>
.main-content {
  margin: 0 auto;
}
#allmap {
  margin: 0 auto;
  width: 858px;
  height: 452px;
}
</style>

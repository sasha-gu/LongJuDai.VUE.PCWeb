<template>
<div class="swiper-container">
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="str in listImg" :key='str.title'>
      <div class="swiper-slide">
        <a v-if="str.link!=''" :href="str.link" :title="str.title" :style="{ backgroundImage: 'url(' + str.imagelogo + ')' }"></a>
        <a v-if='str.link==""' href="javascript:void(0)" :title="str.title" :style="{ backgroundImage: 'url(' + str.imagelogo + ')' }"></a>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <v-indexInformation></v-indexInformation>
  </swiper>
   
</div>
</template>
<script>
import {
  swiper,
  swiperSlide
} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from "axios";
import config from "@/api/config";
import indexInformation from '@/components/index/indexInformation/indexInformation.vue'
export default {
     components: {
      swiper,
      swiperSlide,
      "v-indexInformation":indexInformation
    },
  data() {
    return {
      listImg: [],
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // loop:false,
        autoplayDisableOnInteraction:false,
        effect:'fade',
        pagination :{
          el:'.swiper-pagination',
          clickable:true
        } ,
        observeParents:true,
        observer: true,//修改swiper自己或子元素时，自动初始化swiper
      }
    }
  },

  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  methods: {
  // 获取banner的方法
    _getBanner(){
      let that = this;
      let data = {
        type: 3
      };
      config.data.ActionName = "GetBannerList";
      config.data.MessageType = "Advertisement";
      config.data.Data = JSON.stringify(data);
      axios
        .post("", {}, config)
        .then(function(res) {
          if (res.status == 200) {
            if (res.data) {
              let bannerList = JSON.parse(res.data).Data;
              let bannerResult = JSON.parse(bannerList).list;
              that.listImg = bannerResult;
            }
          }

        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {

  },
  mounted() {
    //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
    // console.log(123)
    this._getBanner();

  }
}
</script>


<style >
.swiper-container {
  height: 375px;
  position: relative;
  width: 100%;
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-container .swiper-slide {
  min-width: 1100px;
  width: 100%;
  height: 375px;
}

.swiper-slide a {
  display: inline-block;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
.swiper-pagination .swiper-pagination-bullet{
    background: #f1f1f1;
    height:15px;
    width:15px;
  }
</style>

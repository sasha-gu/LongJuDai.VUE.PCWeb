<template>
  <div class="index">
    <div class="index-wrapper">
      <div class="banner-wrapper">
        <v-banner></v-banner>
      </div>
      <div class="announce-wrapper">
        <v-announce></v-announce>
      </div>
      <div class="advantage-wrapper">
        <v-advantage></v-advantage>
      </div>
      <div class="plan-wrapper">
        <v-plan></v-plan>
      </div>
      <div class="indexAnnouce-wrapper">
        <v-indexAnnouce></v-indexAnnouce>
      </div>
      <div class="indexPartner-wrapper">
        <v-indexPartner></v-indexPartner>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/index/banner/banner.vue'
import Notice from '@/components/index/notice/notice.vue'
import Advantage from '@/components/index/indexAdvantage/indexAdvantage.vue'
import Plan from '@/components/index/indexPlan/indexPlan.vue'
import indexAnnouce from '@/components/index/indexAnnouce/indexAnnouce.vue'
import indexPartner from '@/components/index/indexPartner/indexPartner.vue'

  export default {
    data(){
      return{
      }
    },
    components: {
      "v-banner":Banner,
      'v-announce': Notice,
      'v-advantage': Advantage,
      'v-plan': Plan,
      'v-indexAnnouce':indexAnnouce,
      'v-indexPartner':indexPartner,
    },
  }
</script>

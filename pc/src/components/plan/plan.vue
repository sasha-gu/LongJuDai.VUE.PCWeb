<template>
  <div class="index">
    <div class="head-wrapper">
      <v-head></v-head>
    </div>
    <div class="nav-wrapper">
      <v-nav></v-nav>
    </div>
    <router-view></router-view>
    <div class="footer-wrapper">
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
  import Head from '@/components/head/head.vue'
  import Nav from '@/components/nav/nav.vue'
  import Footer from '@/components/footer/footer.vue'

  export default {
    components: {
      'v-head': Head,
      'v-nav': Nav,
      'v-footer': Footer
    },
  }
</script>

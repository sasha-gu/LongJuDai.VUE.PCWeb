<template>
  <div class="nav">
    <div class="nav-center clearfix">
      <h1 class="fl">
        <a href=""></a>
      </h1>
      <div class="fr page-nav">
          <ul class="fl">
              <li>
                <router-link to="/index">首页</router-link>
              </li>
              <li>
                <router-link to="/planList">我要投资</router-link>
              </li>
              <li>
                <router-link to="/login">我要借款</router-link>
              </li>
              <li>
                <router-link to="/infoDisclosure">信息披露</router-link>
              </li>
          </ul>
          <div class="register-page fl">
              <router-link to="/register">注册</router-link>
          </div>
          <div class="login-page fl">
            <router-link to="/login">登录</router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import "./nav.css"
</style>

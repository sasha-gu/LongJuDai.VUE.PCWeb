import Vue from 'vue'
import Validator from 'vue-validator'
Vue.use(Validator)
//添加一个收尾是1后面为10位（0-9）数字的手机号验证
Vue.validator('tel', function (val) {
  return /^1\d{10}$/.test(val)
});
//添加一个密码登录验证
//匹配6-20位的任何字类字符，包括下划线。与“[A-Za-z0-9_]”等效。
Vue.validator('loginPassword', function (val) {
  return /^\S{1,}$/.test(val)
});

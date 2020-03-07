//引入vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//设置浏览器的控制台中信息是否显示
Vue.config.productionTip = false
//创建Vue的实例对象
/*eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})

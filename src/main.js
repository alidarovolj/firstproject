import Vue from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/fonts.css'
import './assets/main.less'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

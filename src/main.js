import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import 'iview/dist/styles/iview.css'
import iView from 'iview'
import 'codemirror/lib/codemirror.css'

import codemirror from 'vue-codemirror'

Vue.use(codemirror)
Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

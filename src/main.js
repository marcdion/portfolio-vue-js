import Vue from 'vue'
import App from './Landing.vue'
import router from './router'

import i18n from '@/plugins/i18n';
import '@/assets/sass/_styles.scss';

require('dotenv').config()
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
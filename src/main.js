import Vue from 'vue'
import App from './App.vue'
import router from './router'

import i18n from '@/plugins/i18n';
import Toasted from 'vue-toasted';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/sass/_styles.scss';
import 'bootstrap'

import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Toasted)

require('dotenv').config()
Vue.config.productionTip = false

new Vue({
    router,
    i18n,
    render: h => h(App),
}).$mount('#app')
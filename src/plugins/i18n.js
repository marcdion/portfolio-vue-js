import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'fr': {

    },

    'en': {

    }
}

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages, // set locale messages
});

export default i18n;
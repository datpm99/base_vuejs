import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from 'vuetify/lib/locale/en';
import vi from 'vuetify/lib/locale/vi';

Vue.use(VueI18n)

const messages = {
    en: {
        ...require('@/locales/en.json'),
        $vuetify: en
    },
    vi: {
        ...require('@/locales/vi.json'),
        $vuetify: vi
    }
}

const localLang = localStorage.getItem("LANGUAGE") || 'vi';
localStorage.setItem('LANGUAGE', localLang);
export default new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || localLang,
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || localLang,
    messages
})
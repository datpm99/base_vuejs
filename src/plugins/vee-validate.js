import Vue from 'vue';
import { extend, ValidationProvider, ValidationObserver } from 'vee-validate';

import * as rules from 'vee-validate/dist/rules'
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver)
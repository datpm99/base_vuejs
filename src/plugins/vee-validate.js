import Vue from 'vue';
import { extend, ValidationProvider, ValidationObserver, localize } from 'vee-validate';

import * as rules from 'vee-validate/dist/rules'
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})

import en from 'vee-validate/dist/locale/en.json';
import vi from 'vee-validate/dist/locale/vi.json';
import validatorEn from '../locales/en/validator.json';
import validatorVn from '../locales/vn/validator.json';
// import moment from 'moment';

localize({
    en: {
        messages: {
            ...en.messages,
            ...validatorEn.message,
            // size: (field, size) =>
            //     `The ${field} must be less than ${formatFileSize(size)}.`
        },
        names: { ...validatorEn.names },
        fields: {
            parentName: {
                // required: 'The {_field_} is not null'
            }
        }
    },
    vi: {
        messages: {
            ...vi.messages,
            ...validatorVn.message,
            // size: (field, size) => `${field} không được quá ${formatFileSize(size)}.`
        },
        names: { ...validatorVn.names },
        fields: {
            parentName: {
                // required: '{_field_} ko dc trong'
            }
        }
    }
})

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver)
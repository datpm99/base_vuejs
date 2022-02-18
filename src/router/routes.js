import Vue from 'vue';
import Router from 'vue-router';

import routeNames from './routeNames';
import routePaths from './routePaths';
Vue.use(Router);

const router = new Router({
    linkActiveClass: 'is-active',
    mode: 'history',
    routes: [
        {
            name: routeNames.LOGIN,
            path: routePaths.LOGIN_PATH,
            component: () => import('@/views/login/Login'),
        },
        {
            path: '/',
            component: () => import('@/views/layout/default'),
            children: [
                {
                    path: routePaths.HOME_PATH,
                    name: routeNames.HOME,
                    component: () => import('@/views/home/Home')
                },
                {
                    path: routePaths.DEMO_VUEX_PATH,
                    name: routeNames.DEMO_VUEX,
                    component: () => import('@/views/demo_vuex/DemoVuex')
                },
            ],
        },
        {
            name: routeNames.HOME,
            path: '/:pathMatch(.*)*',
            component: () => import('@/components/base/PageNotFound'),
        }
    ],
});

export default router;
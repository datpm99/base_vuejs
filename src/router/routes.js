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
            name: routeNames.HOME,
            path: '/',
            component: () => import('@/views/home/Home'),
        },
        {
            name: routeNames.HOME,
            path: '/:pathMatch(.*)*',
            component: () => import('@/components/base/PageNotFound'),
        }
    ],
});

export default router;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import routes from './config/routes';
import config from './config/config';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

const router = new VueRouter({
    routes
});

Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});

// Check login status before go to web site
router.beforeEach(({meta, path}, from, next) => {
    let {auth = true} = meta;
    if (auth && path !== '/login') {
        next({path : '/login'});
    } else if (auth && path === '/login') {
        next({path : '/'});
    } else {
        next();
    }
});

/* eslint-disable no-new */
new Vue({
    router,
    config,
    el : '#app',
    template : '<App/>',
    components : { App }
});

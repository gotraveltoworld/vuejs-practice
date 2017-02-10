import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});

module.exports = function (option) {
    // service, action, params = {}, url = 'http://localhost:8080'
    // const SYSTEM_ENV = 'online';
    let SERVER = option.url || 'http://localhost:8080';
    let service = option.service || '';
    let action = option.action || '';
    let params = option.params || {};
    let http = new Vue();
    // let that = this;
    // Include api function.
    function api (service, action, params) {
        let httpObj = {};
        switch (service) {
        default :
            httpObj = {
                login : { method : 'GET', url : SERVER + '/login/test/{id}' },
                logout : { method : 'POST', url : SERVER + '/login/test/' }
            };
            return httpObj;
        }
    };
    let obj = {
        api : http.$resource(SERVER, {}, api(service, action, params))[action](params).then((res) => {
            return res.body;
        }, (error) => {
            return error;
        })
    };
    return obj;
};

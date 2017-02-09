import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.interceptors.push((request, next) => {
    request.credentials = true;
    next();
});
const vm = new Vue();
module.exports = function (service, action, params = {}, url = 'http://localhost:8080') {
    // const SYSTEM_ENV = 'online';
    let SERVER = url;
    let http = vm;
    let that = this;
    function Api () {}
    Api.prototype.config = function (service, action, params) {
        let httpObj = {};
        switch (service) {
        default :
            httpObj = {
                login : { method : 'GET', url : SERVER + '/login/test/05076416' }
            };
            return httpObj;
        }
    };
    let api = new Api();
    that.resource = new Promise((resolve, reject) => {
        http.$resource(SERVER, {}, api.config(service, action))[action]().then((res) => {
            if (res.body.status === 1) {
                return resolve(res.body);
            } else {
                return resolve('api error');
            }
        }, (res) => {
            return reject('http error');
        });
    });
    return that;
};

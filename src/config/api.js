import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);
const vm = new Vue();
module.exports = function (service, action) {
    // const SYSTEM_ENV = 'online';
    var SERVER = 'http://localhost:8080';
    let http = vm;
    function Api () {}
    Api.prototype.config = function (service, action) {
        let httpObj = {};
        switch (service) {
        default :
            httpObj = {
                hello : { method : 'GET', url : '/hello' }
            };
            return httpObj;
        }
    };
    let api = new Api();
    // console.log(http, 'name', api.config(service, action));
    let resource = http.$resource(SERVER, {}, api.config(service, action));
    // var customActions = {
    //     foo : { method : 'GET', url : 'someItem/foo{/id}' },
    //     bar : { method : 'POST', url : 'someItem/bar{/id}' }
    // };
    // let resource = http.$resource(SERVER, {}, customActions);
    console.log(resource);
    resource[action]().then(response => {
        console.log(response.body);
    });
    // return () => {};
};

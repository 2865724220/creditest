import Vue from 'vue';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';

import routes  from './routes';
import * as filters from './filters';

import '@assets/css/index.css';
import 'mint-ui/lib/style.css';

import App from '@pages/app.vue';

Vue.use(MintUI);
Vue.use(VueRouter);

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

const router = new VueRouter({
    mode: 'hash',
  	routes
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

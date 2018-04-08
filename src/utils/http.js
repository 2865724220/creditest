//qinfeng

const axios     = require('axios');
const webConfig = require('../web.config');

let Axios = axios.create({
    baseURL: webConfig.host + "",
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // withCredentials: true,
    responseType: 'json', // default
    transformResponse: [function (data) {
        return data;
    }],
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },
    timeout: 30000
});

// let fn = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
// let arr = [];

Axios.deleteO = function (url, config) {
    console.log(url, 'deleteO');
    return Axios.delete(url, config);
};

Axios.interceptors.request.use( config => {
    config.headers['Authorization-User'] = '579ad6c390cbda762e8860d66a67fa739cd342955b94c0ff9419854ff23cfdf3';//'access_token ' + localStorage.getItem('ACCESSTOKEN')
    return config;
}, error => {
    return Promise.reject(error);
});

Axios.interceptors.response.use( response => {
    return Promise.resolve(JSON.parse(JSON.stringify(response)).data);
}, error => {
    return Promise.reject(JSON.parse(JSON.stringify(error)).response);
});

module.exports = Axios;

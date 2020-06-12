import Axios from "axios";
import Vue from "vue";

// 创建一个axios实例，并设置baseurl
let instance = Axios.create({
    baseURL:"http://tt.linweiqin.com/api/tt",
    timeout:3000
})
Vue.prototype.$axios = instance;
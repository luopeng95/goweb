import vueRouter from "vue-router";
import Vue from "vue";
import index from "@/components/index/index";

Vue.use(vueRouter);

export default new vueRouter({
    routes: [{
        path:'/index',
        component:index,
    },{
        path:'/',
        redirect:"/index",
    }]
})
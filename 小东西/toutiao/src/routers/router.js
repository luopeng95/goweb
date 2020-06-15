import vueRouter from "vue-router";
import Vue from "vue";
import index from "@/components/index/index";
import login from "@/components/login/login";
import NewsListDetail from "@/components/newsListDetail/newsListDetail.vue"

Vue.use(vueRouter);

export default new vueRouter({
    routes: [{
        path:'/index',
        component:index,
    },{
        path:'/',
        redirect:"/index",
    },{
        path:"/login",
        component:login,
        name:"login",
        props:true,
    },{
        path:"/sign",
        component:login,
        name:"sign",
        props:true,
    },{
        path:"/newsListDetail",
        component:NewsListDetail,
        name:"newsListDetail",
        props:true,
    }]
})
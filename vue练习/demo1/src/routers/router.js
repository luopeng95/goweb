import VueRouter from "vue-router"
import Vue from "vue"

import test1 from "@/components/test1.vue"
import test2 from "@/components/test2.vue"

// const test1 = ()=>import("@/components/test1.vue")
// const test2 = ()=>import("@/components/test2.vue")


Vue.use(VueRouter)

export default new VueRouter({
    routes:[{
        path:"/",
        component:test1
    },{
        path:"/test2",
        component:test2
    }]
})
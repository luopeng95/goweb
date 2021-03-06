import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/router.js'
import store from '@/vuex/vuex.js'
import "@/axios/loginaxios.js"

Vue.config.productionTip = false

let vm = new Vue({
  render: h => h(App),
  router,
  store,
  created() {
    // console.log(this.$store);
    // 获取本地登录信息，给vuex添加一个属性
    let user = localStorage.getItem("userInfo");
    if(!user){
      // 没有登录信息的时候添加属性islogin为fase
      this.$store.commit("addAtr",{"islogin":false});
    }else{
      // 有登录信息就添加属性islogin为true，且把登录信息放到vuex里面去
      user = JSON.parse(user);
      this.$store.commit("addAtr",{"islogin":true});
      this.$store.commit("addAtr",user);
    }
    // console.log(this.$store);
  },
}).$mount('#app')

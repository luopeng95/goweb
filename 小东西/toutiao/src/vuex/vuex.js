import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        // lastId:0,
        news:[],
    },
    mutations:{
        addAtr(state,atr){
            // console.log(atr);
            // 循环传进来的对象并且赋值
            // console.log(this);
            for(let [k,v] of Object.entries(atr)){
                Vue.set(state,k,v);
            }
        },
        changIsLogin(state,val){
            console.log(val);
            state.islogin = val;
        },
        delAtr(state,atr){
            for(let k of Object.keys(atr)){
                Vue.delete(state,k);
            }
        }
    },
    actions:{

    },
    getters:{
        lastId(state,getters){
            console.log(getters);
            if(state.news.length === 0){
                return 0;
            }else{
                let id = state.news[0].nid;
                console.log(id);
                return id
            }
        }
    },
})
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{

    },
    mutations:{
        addAtr(state,atr){
            console.log(atr);
            // 循环传进来的对象并且赋值
            for(let [k,v] of Object.entries(atr)){
                state[k] = v;
            }
        },
    },
    actions:{},
    getters:{},
})
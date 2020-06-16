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
        },
        changeNews(state,arr){
            console.log(arr);
            state.news = arr.news.concat(state.news);
        },
        changeNum(state,change){
            if(change.type === "add"){
                let num = +state[change.atr] + 1;
                state[change.atr] = num;
                // 修改本地存储里面的数据
                let data = localStorage.getItem("userInfo");
                data = JSON.parse(data);
                data[change.atr] = num;
                data = JSON.stringify(data);
                localStorage.setItem("userInfo",data);
              }else if(change.type === "del"){
                let num = +state[change.atr] - 1;
                state[change.atr] = num;
                // 修改本地存储里面的数据
                let data = localStorage.getItem("userInfo");
                data = JSON.parse(data);
                data[change.atr] = num;
                data = JSON.stringify(data);
                localStorage.setItem("userInfo",data);
              }
        },
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
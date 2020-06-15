<template>
  <div id="app">
    <div class="lp-navTop">
      <div class="lp-navTop-left">
        <div class="lp-navTop-left-download">下载App</div>
        <div class="lp-navTop-left-reg">注册头条号</div>
      </div>
      <div>侵权投诉</div>
    </div>
    <!-- 内容区开始 -->
    <div id="lp-content">
      <!-- 左边导航开始 -->
      <navs></navs>
      <!-- 左边导航结束 -->

      <!-- 中间内容开始 -->
      <div class="lp-content-mid">
        <Ipt @tologin="toSign" @getNews="getNews"></Ipt>
        <div class="lp-content-mid-refresh" @click="getNews">
          点击刷新
        </div>
        <news></news>
      </div>


      <!-- 中间内容结束 -->

      <!-- 右边内容开始 -->
      <div class="lp-content-right">
        <div class="lp-content-right-search">
          <input type="text">
          <div>搜索</div>
        </div>
        <div class="lp-logInfo">
          <div v-if="isLogin" class="lp-logInfo-login">
            <div class="lp-logInfo-login-logout"><span @click="logout">退出登录</span></div>
            <div class="lp-logInfo-login-avator"><img :src="avator"></div>
            <div class="lp-logInfo-login-nickname">{{nickname}}</div>
            <div class="lp-logInfo-login-count">
              <div>
                <span class="count">{{tt_count}}</span>
                <span class="title">头条数</span>
              </div>
              <div>
                <span class="count">{{article_count}}</span>
                <span class="title">文章数</span>
              </div>
            </div>
          </div>
          <div v-else class="lp-logInfo-logout">
            <div>
                登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条
            </div>
            <div @click="toSign">
                登录
            </div>
          </div>
        </div>
      </div>
      <!-- 右边内容结束 -->
    </div>
    <!-- 内容区结束 -->
  </div>
</template>

<script>
import navs from "@/components/navs/nav";
import Ipt from "@/components/contents/input.vue";
import News from "@/components/contents/news.vue";

export default {
  name: "App",
  components: {
    navs,
    Ipt,
    News,
  },
  computed: {
    isLogin: {
      get() {
        return this.$store.state.islogin;
      },
      set() {}
    },
    avator:{
      get() {
        return this.$store.state.avator;
      },
      set() {}
    },
    nickname:{
      get() {
        return this.$store.state.nickname;
      },
      set() {}
    },
    tt_count:{
      get() {
        return this.$store.state.tt_count;
      },
      set() {}
    },
    article_count:{
      get() {
        return this.$store.state.article_count;
      },
      set() {}
    },
  },
  methods: {
    toSign(){
      this.$router.push({name:"login",params:{type:"login",typetitle:"账密登录"}});
    },
    logout(){
      // 退出登录，删除本地缓存里面的数据并修改vuex里面的islogin
      // 删除vuex里面的相关数据
      let wdata = JSON.parse(localStorage.getItem("userInfo"));
      this.$store.commit('changIsLogin',false);
      this.$store.commit('delAtr',wdata);
      localStorage.setItem("userInfo","");
      console.log(this.$store.state);
      // console.log(this.isLogin);
    },
    getNews(){
      let params = new FormData();
      console.log(this);
      // console.log(this.$store.getters.lastId);
      params.append("lastid", this.$store.getters.lastId);
      this.$axios.post("/getArticles",params).then((msg)=>{
        this.$store.commit('changeNews',{news:msg.data.articles});
        console.log("访问文章接口");
    });
    },
  },
  created() {
    // 页面创建的时候要把vuex里面的数据初始化
    let params = new FormData()
    params.append("lastid", 0);
      this.$axios.post("/getArticles",params).then((msg)=>{
        this.$store.commit('addAtr',{news:msg.data.articles});
        console.log("访问文章接口");
    });
  },
};
</script>

<style scoped>
#app {
  min-width: 960px;
  /* width: 100%; */
}
.lp-navTop {
  background-color: black;
  width: 100%;
  height: 40px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  /* padding: 5px 10px; */
}
.lp-navTop-left {
  display: flex;
  justify-content: center;
  align-items: center;
}
.lp-navTop-left-download {
  margin: 0 15px;
}
.lp-navTop-left-reg {
  margin: 0 15px;
}

/* 内容区开始 */
#lp-content {
  /* background-color: darkseagreen; */
  width: 100%;
  margin: 20px auto;
  display: flex;
  max-width: 1200px;
}

/* 中间区域开始 */
.lp-content-mid {
  /* background-color: darkturquoise; */
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lp-content-mid-refresh{
  width: 80%;
  height: 30px;
  margin-top: 10px;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  border: 1px solid #3192d5;
  color: #3192d5;
}
/* 中间区域结束 */

/* 右边开始 */
.lp-content-right {
  /* background-color: hotpink; */
  flex: 0 0 300px;
}

.lp-content-right-search {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
  height: 40px;
}
.lp-content-right-search > * {
  height: 40px;
}
.lp-content-right-search > input {
  outline: none;
  border: 1px solid #65a7f9;
  border-radius: 5px;
  width: 200px;
  border-right: none;
  font-size: 16px;
}
.lp-content-right-search > div {
  width: 70px;
  background-color: #5099d9;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.lp-logInfo{
    background-color: #ffffff;
    width: 270px;
    margin: 20px auto;
    height: 200px;
    border: 20px solid #f5f6f7;
    box-sizing: border-box;
}
.lp-logInfo>div{
    padding: 0 20px;
}
.lp-logInfo-logout>div:nth-child(1){
    /* background-color: teal; */
    font-size: 12px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    letter-spacing: 0;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #777;
}
.lp-logInfo-logout>div:nth-child(2){
    background-color: #e36059;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    cursor: pointer;
}
.lp-logInfo-login-logout{
  height: 26px;
  text-align: right;
  color: #b9b9b9;
  line-height: 26px;
}
.lp-logInfo-login-logout>span:hover{
  color: #5099d9;
  cursor: pointer;
}
.lp-logInfo-login-avator{
 text-align: center;
}
.lp-logInfo-login-avator>img{
  width: 56px;
  height: 56px;
  border-radius: 50%;
 
}
.lp-logInfo-login-nickname{
  height: 26px;
  text-align: center;
  font-size: 16px;
  color: #222222;
  line-height: 26px;
  font-family: 'avenir';
  font-weight: 100;
}
.lp-logInfo-login-count{
  height: 50px;
  display: flex;
}
.lp-logInfo-login-count>div{
  flex: 1 1 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.lp-logInfo-login-count>div>span{
  flex: 1 1 0;
}
.count{
  font-size: 20px;

}
.title{
  font-size: 14px;
}
/* 右边结束 */
/* 内容区结束 */
</style>

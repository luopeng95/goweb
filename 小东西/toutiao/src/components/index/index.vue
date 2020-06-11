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
      <div class="lp-content-mid">2</div>
      <!-- 中间内容结束 -->

      <!-- 右边内容开始 -->
      <div class="lp-content-right">
        <div class="lp-content-right-search">
          <input type="text">
          <div>搜索</div>
        </div>
        <div class="lp-logInfo">
          <div v-if="isLogin" class="lp-logInfo-login">
            已登录
          </div>
          <div v-else class="lp-logInfo-logout">
            <div>
                登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条
            </div>
            <div>
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

export default {
  name: "App",
  components: {
    navs
  },
  computed: {
    isLogin: {
      get() {
        return this.$store.state.islogin;
      },
      set() {}
    }
  }
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
  background-color: darkseagreen;
  width: 100%;
  margin: 0 auto;
  display: flex;
  max-width: 1200px;
}

/* 中间区域开始 */
.lp-content-mid {
  background-color: darkturquoise;
  flex: 1 1 0;
}
/* 中间区域结束 */

/* 右边开始 */
.lp-content-right {
  background-color: hotpink;
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
}
/* 右边结束 */
/* 内容区结束 */
</style>

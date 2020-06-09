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
      </div>
      <!-- 右边内容结束 -->
    </div>
    <!-- 内容区结束 -->
  </div>
</template>

<script>
import navs from "./components/navs/nav";

export default {
  name: 'App',
  components: {
    navs
  }
}
</script>

<style scoped>
#app {
  min-width: 960px;
  width: 100%;
}
.lp-navTop{
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
.lp-navTop-left{
  display: flex;
  justify-content: center;
  align-items: center;
}
.lp-navTop-left-download{
  margin: 0 15px;
}
.lp-navTop-left-reg{
  margin: 0 15px;
}

/* 内容区开始 */
  #lp-content{
    background-color: darkseagreen;
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  /* 中间区域开始 */
  .lp-content-mid{
    background-color: darkturquoise;
    flex: 1 1 0;
  }
  /* 中间区域结束 */

  /* 右边开始 */
  .lp-content-right{
    background-color: hotpink;
    flex: 0 0 300px;
  }

  .lp-content-right-search{
    display: flex;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
  }
  /* 右边结束 */
/* 内容区结束 */
</style>

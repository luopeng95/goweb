<!--  -->
<template>
  <div class='lp-toutiao-nav'>
      <h4>泽林头条</h4>
      <li v-for="v,i in lists" :class="{active:i === active}" @click="cliNav($event,i)">
          {{v}}
      </li>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        lists:["推荐","西瓜视频","财经","热点","直播","图片","科技","娱乐","游戏","体育","懂车帝","热点"],
        active:0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      cliNav(e,i){
          this.active = i;
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
    .lp-toutiao-nav{
        flex: 0 0 200px;
        text-align: center;
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h4{
        font-size:20px;
        color: #e36059;
        font-weight: 200;
        margin-bottom: 20px;
    }
    li {
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        width: 100px;
        border-radius: 6px;
    }
    .active{
        color: #e36059;
    }
    li:hover{
        background-color: #e36059;
        color:white;
        cursor: pointer;
    }

</style>
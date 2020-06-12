<!--  -->
<template>
  <div class='lp-content-mid-input'>
      <div class="lp-content-mid-input-tab">
          <div :class="{active:active==='tt'}">发微头条</div>
          <div :class="{active:active==='arcticle'}">写文章</div>
      </div>
      <div class="lp-content-mid-input-tt">
          <textarea autocomplete="off" placeholder="有啥新鲜事呀" maxlength="2000"></textarea>
      </div>
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
        active:"tt",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
<style  scoped lang="less">
    .lp-content-mid-input{
        background-color: white;
        width: 390px;
        // height: 220px;
        border: 1px solid #e4e4ed;

        .lp-content-mid-input-tab{
            display: flex;
            height: 40px;
            line-height: 40px;
            border-bottom: 1px solid #e4e7ed;

            >div{
                margin-left: 30px;
                font-size: 16px;
                color: #5599fc;
                cursor: pointer;
            }

            .active{
                border-bottom: 2px solid #e73645;
            }

        }

        .lp-content-mid-input-tt{
            width: 100%;
            height: 121px;
            // background-color: turquoise;
            >textarea{
                width: 100%;
                height: 100%;
                background-color: #f4f5f6;
                border:none;
                box-sizing: border-box;
                padding: 10px 15px 5px;
            }
        }
    }
</style>
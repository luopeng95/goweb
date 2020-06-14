<!--  -->
<template>
  <div class="lp-content-mid-news">
    <div v-for="v in news">
        <div class="lp-content-mid-news-noImg" v-if="!v.img">
            <span>{{v.title}}</span>
            <div>
                <img :src="v.user.avator">
                <span>{{v.user.nickname}}</span>
                <span>{{v.created_at}}</span>
            </div>
        </div>
        <div class="lp-content-mid-news-Img" v-else>
            <img :src="v.img">
            <div>
                <span>{{v.title}}</span>
                <div>
                    <img :src="v.user.avator">
                    <span>{{v.user.nickname}}</span>
                    <span>{{v.created_at}}</span>
                </div>
            </div>
        </div>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    news: {
      get() {
        return this.$store.state.news;
      },
      set() {}
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  filters:{
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 访问接口，获取数据
    let params = new FormData();
    // console.log(this.$store.getters.lastId);
    params.append("lastid", this.$store.getters.lastId);
    this.$axios.post("/getArticles",params).then((msg)=>{
        this.$store.commit('addAtr',{news:msg.data.articles});
        // console.log(this.$store.state);
        // console.log(this.$store.getters);
    });
  },
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
.lp-content-mid-news {
  width: 80%;
  margin-top: 20px;
//   background-color: tomato;

  .lp-content-mid-news-noImg{
      width: 100%;
      height: 78px;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid #e8e8e8;
      box-sizing: border-box;

      >*{
          flex: 1 1 0;
          line-height: 29px;

      }

      >div{
          font-size: 14px;
          font-weight: 100;
          display: flex;
          align-items: center;
        //   justify-content: space-between;
        
          >img{
              width: 18px;
              height: 18px;
              border-radius: 50%;
            //   vertical-align: super;
          }
      }
  }
  .lp-content-mid-news-Img{
      width: 100%;
      height: 124px;
      padding: 10px 0;
      display: flex;
      border-bottom: 1px solid #e8e8e8;


      >img{
          flex: 4 1 0;
          height: 100%;
      }

      >div{
          flex: 6 1 0;
          padding: 10px 0px 10px 20px;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      font-weight: bold;
      box-sizing: border-box;
      justify-content: space-around;
      

      >*{
          flex: 0 0 26px;
          line-height: 26px;

      }

      >div{
          font-size: 14px;
          font-weight: 100;
          display: flex;
          align-items: center;
        //   justify-content: space-between;
        //   word-wrap: normal;
          

          >img{
              width: 18px;
              height: 18px;
              border-radius: 50%;
            //   vertical-align: super;
          }

          >span{
            //   word-wrap: break-word;
            margin: 0 5px;
            white-space: nowrap;
          }
      }
      }
  }
}
</style>
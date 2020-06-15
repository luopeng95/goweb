<!--  -->
<template>
  <div class='lp-newsListDetail'>
    <div class="lp-newsListDetail-nav">
      <div class="lp-newsListDetail-nav-content">
        <div class="lp-newsListDetail-nav-img"><img src="//s3.pstatp.com/toutiao/static/img/logo.271e845.png"></div>
        <div class="lp-newsListDetail-nav-input">
          <input
            type="text"
            placeholder="搜索你感兴趣的内容吧"
          >
          <div>搜索</div>
        </div>
      </div>
    </div>

    <!-- 内容区域 试用圣杯布局-->
    <div class="lp-newsListDetail-content">
      <div class="lp-newsListDetail-content-mid">
        <div class="lp-newsListDetail-content-mid-title">
            {{title}}
        </div>
        <div class="lp-newsListDetail-content-mid-user">
            <span>{{nickname}}</span>
            <span>{{user}}</span>
        </div>
        <div class="lp-newsListDetail-content-mid-content">
            <p v-if="type === 'TT'">
                <img :src="url" v-for="url in imgs">
            </p>
            <p v-html="content">
            </p>
        </div>
      </div>
      <div class="lp-newsListDetail-content-left">
        <ul>
          <li v-for="v in forward">
              <img :src="v.url">
              <span>{{v.text}}</span>
          </li>
        </ul>
      </div>
      <div class="lp-newsListDetail-content-right">
          <div>
              <img :src="avator">
              <span>{{nickname}}</span>
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
    return {
      newsInfo: "",
      type: "",
      forward: [
        {
          text: "转发",
          url: "//s3.pstatp.com/toutiao/static/img/repost.021bf16.png"
        },
        {
          text: "微博",
          url: "//s3.pstatp.com/toutiao/static/img/repost.021bf16.png"
        },
        {
          text: "Qzone",
          url: "//s3.pstatp.com/toutiao/static/img/repost.021bf16.png"
        },
        {
          text: "微信",
          url: "//s3.pstatp.com/toutiao/static/img/repost.021bf16.png"
        }
      ],
      content:"",
      title:"",
      user:"",
      nickname:"",
      avator:"",
      type:"",
      imgs:[],
    };
  },
  props: ["nid"],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeRouteEnter: (to, from, next) => {
    // console.log(to.query.nid);
    // console.log(this);
    next();
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 在组件渲染的时候根据拿到的nid请求数据

    this.$axios.post("/getArticleById", { nid: this.nid }).then(msg => {
      console.log(msg.data.article);
      let newsInfo = msg.data.article;
      this.newsInfo = newsInfo;
      this.user = newsInfo.created_at;
      this.title = newsInfo.title;
      this.avator = newsInfo.n_user.avator;
      this.content = newsInfo.content;
      this.nickname = newsInfo.n_user.nickname;
      this.type = newsInfo.type;
      this.imgs = newsInfo.imgs;
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
<style lang="less">
.lp-newsListDetail {
  width: 100%;
  min-width: 1200px;

  > .lp-newsListDetail-nav {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #ededed;
    box-shadow: 0px 2px 2px #ededed;
    margin-bottom: 10px;

    > .lp-newsListDetail-nav-content {
      // background-color: thistle;
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > .lp-newsListDetail-nav-img {
        width: 108px;
        height: 28px;

        > img {
          width: 100%;
          height: 100%;
        }
      }

      > .lp-newsListDetail-nav-input {
        display: flex;
        align-items: center;

        > input {
          width: 262px;
          height: 44px;
          font-size: 16px;
          padding-left: 10px;
          box-sizing: border-box;
          border: 1px solid #e8e8e8;
          border-bottom-left-radius: 6px;
          border-top-left-radius: 6px;
          background-color: #f4f5f6;
        }

        > div {
          width: 78px;
          height: 44px;
          background-color: #5099d9;
          color: white;
          text-align: center;
          line-height: 44px;
          font-size: 16px;
          border-bottom-right-radius: 6px;
          border-top-right-radius: 6px;
        }
      }
    }
  }

  > .lp-newsListDetail-content {
    // background-color: khaki;
    width: 90%;
    margin: 0 auto;
    display: flex;
    margin-top:40px;

    > .lp-newsListDetail-content-mid {
    //   background-color: lawngreen;
      flex: 5 5 0;

      >.lp-newsListDetail-content-mid-title{
          font-size: 44px;
          margin-bottom: 20px;
      }

      >.lp-newsListDetail-content-mid-user{
          margin-bottom: 20px;
          >span{
              margin-right: 10px;
          }
      }
      >.lp-newsListDetail-content-mid-content{

          >p{

              img{
                  display: block;
                  margin: 10px auto;
              }
          }
      }
    }

    > .lp-newsListDetail-content-left {
    //   background-color: lightgreen;
      flex: 0 0 108px;
      order: -1;

      >ul{
          >li{
              display: flex;
              margin-bottom: 10px;
            //   justify-content: space-around;
              >img{
                //   flex: 1 1 0;
                  height: 34px;
                  width: 34px;
                  margin-right: 20px;
              }
            
            >span{
                //   flex: 1 1 0;
                line-height: 34px;
            }
              }
      }
    }

    > .lp-newsListDetail-content-right {
    //   background-color: lightpink;
      flex: 0 0 340px;

      >div{
          width: 100%;
          height: 90px;
          background-color: #f4f5f6;
          line-height: 90px;
          border-top: 2px solid #e73645;
          font-size: 20px;

          >img{
          vertical-align: middle;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              margin: 0 20px;
          }
      }
    }
  }
}
</style>
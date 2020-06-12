<!--  -->
<template>
  <div class='lp-login'>
    <img
      src="//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/slogan_c6bab2f.png"
      class="lp-login-text"
    >

    <img
      src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png"
      class="lp-login-title"
    >

    <!-- 内容区 -->
    <div class="lp-login-content">
      <div class="lp-login-content-title">{{typetitle}}</div>
      <input
        type="text"
        placeholder="账号/邮箱"
        v-model="username"
      >
      <input
        type="password"
        placeholder="密码"
        v-model="password"
      >
      <div
        class="lp-login-content-login"
        @click="confirm"
      >确定</div>
    </div>

    <!-- 条款和注册 -->
    <div class="lp-login-clause">
      <div>注册/登录即表示你同意 <a
          href="https://www.toutiao.com/user_agreement/"
          target="_blank"
        >用户协议</a> 和 <a
          href="https://www.toutiao.com/privacy_protection/"
          target="_blank"
        >隐私条款</a></div>
      <div
        v-if="type === 'sign'"
        class="lp-login-clause-login"
        @click="tologin"
      >登录</div>
      <div
        v-if="type === 'login'"
        class="lp-login-clause-sign"
        @click="toSignq"
      >注册用户</div>
    </div>

    <!-- 错误提示 -->
    <div :class="['lp-login-tips',{'lp-login-tips-dis':disMsg === true}]">
      {{msg}}
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
      username: "",
      password: "",
      msg: "",
      disMsg: false
    };
  },
  props: ["type", "typetitle"],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toSignq() {
      // console.log(this.$vouter);
      this.$router.push({
        name: "sign",
        params: { type: "sign", typetitle: "账密注册" }
      });
    },
    tologin() {
      this.$router.push({
        name: "login",
        params: { type: "login", typetitle: "账密登录" }
      });
    },
    confirm() {
      // 用正则判断只有账号和密码属于\w范围内才会继续（暂时不做）
      if (this.type === "login") {
        console.log("登录行为");
        // 登录页面，调用登录接口
        this.$axios
          .post("/loginCheck", {
            username: this.username,
            password: this.password
          })
          .then(msg => {
            // console.log(msg.data);
            // 展示提示信息
            this.msg = msg.data.msg;
            // 判断是否登录成功   判断返回的status是否等于0，等于0就成功登录
            if (!msg.data.status) {
              // 登录成功，把数据保存在本地缓存中并返回到首页修改vuex里面的islogin为true
              let { wdata } = msg.data;
              // 把登录信息同步到vuex里面去
              this.$store.commit("addAtr", wdata);
              wdata = JSON.stringify(wdata);
              localStorage.setItem("userInfo", wdata);
              this.$store.commit("changIsLogin", true);
              // console.log(this.$store.state);
              this.$router.push("/index");
            }
          });
      } else if (this.type === "sign") {
        console.log("注册行为");
        // 调用注册接口，注册成功后将登录信息保存在vuex和本地缓存中并返回首页
        // 依然用status去判断是否注册成功
        this.$axios
          .post("/createUser", {
            username: this.username,
            password: this.password
          })
          .then(msg => {
            console.log(msg.data);
            // 展示提示信息
            this.msg = msg.data.msg;
            // 判断是否注册成功   判断返回的status是否等于0，等于0就成功登录
            if (!msg.data.status) {
              // 注册成功，把返回的账号密码作为参数调用登录接口自动登录
              this.$axios
          .post("/loginCheck", {
            username: this.username,
            password: this.password
          })
          .then(msg => {
            // console.log(msg.data);
            // 展示提示信息
            // this.msg = msg.data.msg;
            // 判断是否登录成功   判断返回的status是否等于0，等于0就成功登录
            if (!msg.data.status) {
              // 登录成功，把数据保存在本地缓存中并返回到首页修改vuex里面的islogin为true
              let { wdata } = msg.data;
              // 把登录信息同步到vuex里面去
              this.$store.commit("addAtr", wdata);
              wdata = JSON.stringify(wdata);
              localStorage.setItem("userInfo", wdata);
              this.$store.commit("changIsLogin", true);
              // console.log(this.$store.state);
              this.$router.push("/index");
            }
          });
              
            }
          });
      }
      this.disMsg = true;
      setTimeout(() => {
        this.disMsg = false;
      }, 1000);
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
<style  scoped lang="less">
.lp-login {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../../assets/loginbg.png");

  .lp-login-text {
    display: block;
    width: 520px;
    height: 360px;
    margin: 0 auto;
  }

  .lp-login-title {
    width: 110px;
    height: 27px;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .lp-login-content {
    background-color: white;
    width: 375px;
    height: 274px;
    padding: 0 20px;
    box-sizing: border-box;
    position: absolute;
    top: calc(50% - 157px);
    left: calc(50% - 188px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    > * {
      height: 46px;
      line-height: 46px;
    }

    > .lp-login-content-title {
      text-align: center;
      font-size: 16px;
      border-bottom: 1px solid #dedede;
    }

    > input {
      padding-left: 10px;
      font-size: 16px;
      border: 1px solid #dedede;
    }

    .lp-login-content-login {
      text-align: center;
      color: white;
      border: 1px solid #dedede;
      background-color: #f85959;
      font-size: 16px;
      transition: all 0.5s;
      border-radius: 6px;
      cursor: pointer;
    }

    .lp-login-content-login:hover {
      background-color: #f05555;
      transform: scale(1.05);
      transform-style: preserve-3d;
    }
  }

  .lp-login-clause {
    // background-color: turquoise;
    width: 375px;
    height: 20px;
    box-sizing: border-box;
    position: absolute;
    top: calc(50% + 130px);
    left: calc(50% - 188px);
    display: flex;
    justify-content: space-around;

    > div {
      color: #959595;
      line-height: 20px;
      text-align: center;

      > a {
        color: #6982a9;
      }
    }

    .lp-login-clause-login {
      cursor: pointer;
      color: #6982a9;
    }

    .lp-login-clause-sign {
      cursor: pointer;
      color: #6982a9;
    }
  }

  .lp-login-tips {
    background-color: #fcf7ef;
    width: 250px;
    height: 40px;
    line-height: 40px;
    padding-left: 30px;
    box-sizing: border-box;
    color: #e6b974;
    position: absolute;
    top: 0;
    left: calc(50% - 125px);
    transition: all 0.5s;
    opacity: 0;
  }
  .lp-login-tips-dis {
    transition: all 0.5s;
    opacity: 1;
    top: 20px;
  }
}
</style>
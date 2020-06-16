<!--  -->
<template>
  <div class="lp-userdata">
    <div class="lp-usercenter-nav">
      <div>
        <img
          src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png"
          @click="toIndex"
        />
      </div>
    </div>

    <div class="lp-userdata-content">
      <div class="lp-usercenter-tab">
        <span :class="{'active':active === 'userInfo'}" @click="switchTab($event,'userInfo')">账户信息</span>
        <span :class="{'active':active === 'acount'}" @click="switchTab($event,'acount')">密码管理</span>
      </div>

      <div v-if="active === 'userInfo'" class="lp-userdata-content-userInfo">
          <div>
              <span>名称</span><input type="text" v-model="nickname">
          </div>
          <div>
              <span>头像</span><input type="file" class="lp-userdata-content-userInfo-file" @change="upLoadImg" accept=".jpg,.png">
              <img :src="avator">
          </div>
          <div>
              <span></span>
              <div class="lp-userdata-content-userInfo-upload" @click="upload">
                  更新资料
              </div>
          </div>
      </div>
      <div v-else-if="active === 'acount'" class="lp-userdata-content-acount">
          <div>
              <span >当前密码</span>
              <input type="password" v-model="oldPassword">
          </div>
          <div>
              <span>新密码</span>
              <input type="password" v-model="newPassword">
          </div>
          <div>
              <span></span>
              <div class="lp-userdata-content-userInfo-upload" @click="uploadPassword">更新资料</div>
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
      active: "userInfo",
      nickname:"",
      avator:"",
      newPassword:"",
      oldPassword:"",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toIndex() {
      // console.log(1);
      this.$router.push("/index");
    },
    switchTab(e, val) {
      this.active = val;
    },
    upLoadImg(e){
        // console.log(e);
        let files = e.target.files;
        files.forEach(e => {
            let params = new FormData();
            params.append("file",e)
            this.$axios.post("/aliossUpload",params).then((msg)=>{
                // console.log(msg.data.url);
                this.avator = msg.data.url
            })
        });
    },
    upload(){
        // 更新信息并保存到vuex和本地存储中
        let oauth = this.$store.state.oauth_token;
        let params = new FormData();
        params.append("oauth_token",oauth);
        params.append("nickname",this.nickname);
        params.append("avator",this.avator);
        this.$axios.post("/updateUserInfo",params).then((msg)=>{
            console.log(msg);
            this.$store.commit("addAtr",{"nickname":this.nickname,"avator":this.avator})
            let data = localStorage.getItem("userInfo");
            data = JSON.parse(data);
            data.nickname = this.nickname;
            data.avator = this.avator;
            data = JSON.stringify(data);
            localStorage.setItem("userInfo",data);
            console.log(this.$store.state);
        })
    },
    uploadPassword(){
        let oauth_token = this.$store.state.oauth_token;
        let params = new FormData();
        params.append("currentPassword",this.oldPassword);
        params.append("updatePassword",this.newPassword);
        params.append("oauth_token",oauth_token);
        this.$axios.post("/updatePassword",{
            currentPassword:this.oldPassword,
            updatePassword:this.newPassword,
            oauth_token:oauth_token
        }).then(msg=>{
            console.log(msg.data);
        });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    //  拿到所有的初始数据
    this.nickname = this.$store.state.nickname;
    this.avator = this.$store.state.avator;
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
.lp-userdata {
    *{
        box-sizing: border-box;
    }
  > .lp-usercenter-nav {
    background-color: white;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0px 2px 2px #dfdfdf;

    > div {
      width: 1060px;
      height: 100%;
      margin: 0 auto;

      > img {
        width: 108px;
        height: 27px;
        // line-height: 60px;
        margin-top: 16px;
      }
    }
  }

  > .lp-userdata-content {
    width: 1060px;
    margin: 20px auto;

    > .lp-usercenter-tab {
      background-color: white;
      width: 100%;
      height: 40px;
      display: flex;
      border-bottom: 2px solid #e4e7ed;

      > span {
        cursor: pointer;
        line-height: 40px;
        height: 40px;
        margin: 0 10px;
        font-size: 14px;
        font-family: "宋体";
        font-weight: bold;
      }

      > .active {
        border-bottom: 2px solid #e73645;
      }
    }

    >.lp-userdata-content-userInfo{
        margin-top: 10px;
        >div{
            margin: 10px 0;
            display: flex;
            position: relative;

            >*{
                height: 40px;
            }

            >span{
                width: 80px;
                text-align: right;
                line-height: 40px;
                padding-right: 10px;
            }

            >input{
                flex: 1 1 0;
                border: 1px solid #dcdfe6;
                border-radius: 6px;
                padding-left: 10px;
                font-size: 16px;
            }

            >.lp-userdata-content-userInfo-upload{
                width: 100px;
                height: 40px;
                background-color: #409eff;
                border-radius: 8px;
                text-align: center;
                line-height: 40px;
                color: white;
            }

            >img{
                width: 178px;
                height: 178px;
                border-radius: 8px;
            }

            >.lp-userdata-content-userInfo-file{
                background-color: red;
                position: absolute;
                width: 178px;
                height: 178px;
                border: none;
                top: 0;
                left: 80px;
                opacity: 0;
            }
        }
    }

    >.lp-userdata-content-acount{
         margin-top: 10px;
        >div{
            margin: 10px 0;
            display: flex;
            position: relative;
        

            >*{
                height: 40px;
            }

            >span{
                width: 80px;
                text-align: right;
                line-height: 40px;
                padding-right: 10px;
            }

            >input{
                flex: 1 1 0;
                border: 1px solid #dcdfe6;
                border-radius: 6px;
                padding-left: 10px;
                font-size: 16px;
            }

            >.lp-userdata-content-userInfo-upload{
                width: 100px;
                height: 40px;
                background-color: #409eff;
                border-radius: 8px;
                text-align: center;
                line-height: 40px;
                color: white;
            }
        }

    }
  }
}
</style>
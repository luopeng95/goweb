<!--  -->
<template>
  <div class="lp-content-mid-input">
    <div class="lp-content-mid-input-tab">
      <div
        :class="{active:active==='tt'}"
        @click="function(){active='tt'}"
      >发微头条</div>
      <div
        :class="{active:active==='arcticle'}"
        @click="function(){active='arcticle'}"
      >写文章</div>
    </div>
    <div
      class="lp-content-mid-input-tt"
      v-if="active==='tt'"
    >
      <div class="lp-content-mid-input-tt-text">
        <textarea
          autocomplete="off"
          placeholder="有啥新鲜事呀"
          maxlength="2000"
          v-model="text"
        ></textarea>
        <div class="lp-content-mid-input-tt-num">{{text.length}}/2000</div>
      </div>
      <div class="lp-content-mid-input-tt-fun">
        <span @click="function(){disImg = !disImg}">图片</span>
        <span @click="releaseTT">发布</span>
        <div
          class="lp-content-mid-input-tt-fun-img"
          v-show="disImg"
        >
          <div>
            <input
              type="file"
              @change="uploadimg"
              multiple
              accept=".jpg,.png"
              max
            >
            +
          </div>
          <div v-for="v,i in imglists">
            <img :src="v">
            <div class="lp-del-img" @click="delimg($event,i)">
              -
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 写文章区域 -->
    <div
      v-else
      class="lp-content-mid-input-arcticle"
    >
      <input
        type="text"
        maxlength="30"
        v-model="arcTitle"
      >
      <vue-editor
        v-model="editor"
        class="rich-editor"
        useCustomImageHandler
        @image-added="handleImageAdded"
      ></vue-editor>
      <div class="lp-release">
        <div @click="releaseArcitle">发布</div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import { VueEditor } from "vue2-editor";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { VueEditor },
  data() {
    //这里存放数据
    return {
      active: "tt",
      text: "",
      imglists: [],
      disImg: false,
      editor: "",
      article_first_img:"",
      arcTitle:"",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    uploadimg(e) {
      Array.from(e.target.files).forEach(e => {
        let params = new FormData();
        params.append("file", e);
        this.$axios.post("/aliossUpload", params).then(res => {
          this.imglists.push(res.data.url);
        },err => {console.log(err);});
      });
    },
    delimg(e,i){
      this.imglists.splice(i,1);
    },
    releaseTT(){
      // 如果当前还没有登录就跳转到登录界面
      if(!this.$store.state.islogin){
        this.$emit("tologin");
        // console.log(this);
      }else{
        console.log("已经登录了");
        // 已经登录的话就访问创建接口发送数据，成功之后再调用刷新方法
        console.log(this.$store.state);
        let params = new FormData();
        params.append("content",this.text);
        params.append("oauth_token",this.$store.state.oauth_token);
        params.append("imgs",this.imglists.join(","));
        this.$axios.post("/createTT",params).then(msg=>{
          console.log(msg.data);
          // 清空text、清空并隐藏图片上传区域、刷新
          this.text = "";
          this.imglists = [];
          this.disImg = false;
          this.$emit("getNews");
          this.$store.commit("changeNum",{type:"add",atr:'tt_count'})
        })
      }
    },
    releaseArcitle(){
      // 如果当前还没有登录就跳转到登录界面
      if(!this.$store.state.islogin){
        this.$emit("tologin");
        // console.log(this);
      }else{
        console.log(this.arcTitle);
        console.log(this.editor);
        console.log(this.article_first_img);
        // 连接文章创建接口
        let params = new FormData();
        params.append("title",this.arcTitle);
        params.append("content",this.editor);
        params.append("img",this.article_first_img);
        params.append("oauth_token",this.$store.state.oauth_token);
        this.$axios.post("/createArticle",params).then((msg)=>{
          console.log(msg.data);
          // 清空标题，内容和首图地址
          this.arcTitle = "";
          this.editor = "";
          this.article_first_img = "";
          this.$store.commit("changeNum",{type:"add",atr:'article_count'})
        });
      }
    },
    handleImageAdded:function(file, Editor, cursorLocation, resetUploader){
      console.log("图片添加");
      let param = new FormData();
        param.append('file',file);
        this.$axios.post('/aliossUpload',param).then((response)=>{
          let url = response.data.url; 
          /* 把获取到的图片url 插入到鼠标所在位置 回显图片 */
          Editor.insertEmbed(cursorLocation, "image", url);
          console.log('文章上传图片')
          console.log(this.article_first_img)
          console.log(url);
          if (this.article_first_img == ''){
            this.article_first_img = url;
          }else{
          }
          /* 重置上传器 */
          resetUploader();
        }).catch((response)=>{
          console.log(response)
        })
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
* {
  box-sizing: border-box;
}
.lp-content-mid-input {
  background-color: white;
  width: 80%;
  // height: 220px;
  border: 1px solid #e4e4ed;

  .lp-content-mid-input-tab {
    display: flex;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e4e7ed;

    > div {
      margin-left: 30px;
      font-size: 16px;
      color: #5599fc;
      cursor: pointer;
    }

    .active {
      border-bottom: 2px solid #e73645;
    }
  }

  .lp-content-mid-input-tt {
    width: 100%;

    position: relative;
    // background-color: turquoise;
    textarea {
      min-height: 152px;
      width: 100%;
      background-color: #f4f5f6;
      border: none;
      box-sizing: border-box;
      padding: 12px 15px;
    }

    .lp-content-mid-input-tt-text {
      position: relative;
    }
    .lp-content-mid-input-tt-num {
      position: absolute;
      bottom: 4px;
      right: 20px;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      color: #757575;
    }

    .lp-content-mid-input-tt-fun {
      position: relative;
      width: 100%;
      height: 50px;
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 14px;
      align-items: center;

      > span:nth-child(1) {
        cursor: pointer;
      }

      > span:nth-child(2) {
        cursor:pointer;
        width: 100px;
        height: 30px;
        line-height: 30px;
        background-color: #ea4245;
        text-align: center;
        color: white;
        border-radius: 4px;
      }

      .lp-content-mid-input-tt-fun-img {
        background-color: white;
        position: absolute;
        top: 50px;
        left: 0px;
        display: grid;
        width: 310px;
        grid-template-columns: repeat(3, 33.3%);
        border: 1px solid gray;
        grid-gap: 2px;
        padding: 2px;
        box-sizing: border-box;
        padding-right: 5px;

        > div {
          height: 100px;
          font-size: 50px;
          text-align: center;
          line-height: 100px;
          position: relative;
          border: 1px dashed gray;
          box-sizing: border-box;
          position: relative;

          > input {
            position: absolute;
            top: 0;
            left: 0px;
            opacity: 0;
            width: 100px;
            height: 100px;
            cursor: pointer;
          }

          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .lp-content-mid-input-arcticle {
    background-color: #f4f5f6;
    padding: 0 20px;
    display: flex;
    flex-direction: column;

    > input {
      height: 40px;
      font: 16px;
      margin: 10px 0;
    }

    .rich-editor {
      background-color: white;
    }

    > .lp-release {
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: flex-end;

      > div {
        height: 100%;
        width: 100px;
        background-color: #f48c8c;
        text-align: center;
        border-radius: 6px;
        cursor: pointer;
      }
    }
  }
}

.lp-del-img{
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: gray;
  cursor: pointer;
}

.lp-del-img:hover{
  opacity: .5;
}
</style>
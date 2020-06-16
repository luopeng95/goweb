<!--  -->
<template>
<div class='lp-usercenter'>
    <div class='lp-usercenter-nav'>
        <div>
            <img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png" @click="toIndex">
        </div>
    </div>
    <div class='lp-usercenter-content'>
        <div class='lp-usercenter-content-bg'>
            <img src="//s3.pstatp.com/site/tt_mfsroot/pc_img/bg_profile.png">
        </div>
        <div class='lp-usercenter-content-info'>
            <img src="//sf1-ttcdn-tos.pstatp.com/img/pgc-image/f6cc8e95467f44e3bcdcf9d4ca0a58f6~120x256.image">
            <span>name</span>
            <span class="lp-usercenter-content-info-edit" @click="toUserData">edit</span>
        </div>

        <div class='lp-usercenter-content-lists'>
            <div class="lp-usercenter-content-lists-nav">
                <div class="lp-usercenter-tab">
                    <span :class="{'active':active === 'Articles'}" @click="switchTab($event,'Articles')">文章</span>
                    <span :class="{'active':active === 'TTLists'}" @click="switchTab($event,'TTLists')">微头条</span>
                </div>
                <keep-alive>
                    <component :is="active" :arrData="arrData" @delNews="delNews"></component>
                </keep-alive>
            </div>
            <div class="lp-usercenter-content-lists-num">
                <div>
                    <span>{{articles.length}}</span>
                    <span>文章数</span>
                </div>
                <div>
                    <span>{{ttlists.length}}</span>
                    <span>头条数</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Articles from "@/components/UserLists/Articles.vue";
import TTLists from "@/components/UserLists/TTLists.vue";

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    ttlists:[],
    articles:[],
    active:"Articles",
};
},
//监听属性 类似于data概念
computed: {
    arrData:{
        get(){
            if(this.active === "Articles"){
                return this.articles;
            }else{
                return this.ttlists;
            }
        },
        set(){},
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    switchTab(e,v){
        this.active = v;
    },
    delNews(nid){
        console.log('父组件拿到了nid:',nid);
        let oauth = this.$store.state.oauth_token;
        let params = new FormData;
        params.append("oauth_token",oauth)
        params.append("nid",nid)
        this.$axios.post("/deleteArticle",params).then(msg=>{
            if (msg.data.status == 0) {
            let index = this.articles.findIndex(v => v.nid == nid);
            if (index != -1) {
              this.articles.splice(index, 1);
              this.$store.commit("changeNum",{type:"del",atr:'article_count'})
              
              return true;
              
            }
            index = this.ttlists.findIndex(v => v.nid == nid);
            if (index != -1) {
              this.ttlists.splice(index, 1);
              this.$store.commit("changeNum",{type:"del",atr:'tt_count'})
                console.log(this.$store.state);
              return true;
            }
          }
        })
    },
    toIndex(){
        // console.log(1);
        this.$router.push("/index");
    },
    toUserData(){
        this.$router.push({name:"UserData"});
    }
},
components:{Articles,TTLists},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    //  在页面加载的时候去请求到用户的文章数据和头条数据
    //  type分别是TT 和 Article
    let oauth = this.$store.state.oauth_token;
    let params1 = new FormData;
    let params2 = new FormData;
    params1.append("oauth_token",oauth);
    params2.append("oauth_token",oauth);
    params1.append("type","TT");
    params2.append("type","Article");

    this.$axios.post("/getArticlesByType",params1).then((msg)=>{
        // console.log(msg.data);
        this.ttlists = msg.data.articles;
    })

    this.$axios.post("/getArticlesByType",params2).then((msg)=>{
        // console.log(msg.data);
        this.articles = msg.data.articles;
    })

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang="less">
body{
    background-color: #f4f5f6;
}
    .lp-usercenter-nav{
        background-color: white;
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #dfdfdf;
        box-shadow: 0px 2px 2px #dfdfdf;

        >div{
            width: 1060px;
            height: 100%;
            margin: 0 auto;

            >img{
                width: 108px;
                height: 27px;
                // line-height: 60px;
                margin-top: 16px;
            }
        }
    }

    .lp-usercenter-content{
        // background-color: yellowgreen;
        width: 1060px;
        margin: 10px auto;

        *{
            box-sizing: border-box;

        }

        >.lp-usercenter-content-bg{
            height: 160px;

            >img{
                width: 100%;
                height: 100%;
            }
        }

        >.lp-usercenter-content-info{
            background-color: white;
            height: 84px;
            margin-bottom: 15px;
            box-sizing: border-box;
            display: flex;

            >img{
                width: 100px;
                height: 100px;
                border-radius: 50%;
                margin-top: -30px;
                margin-left: 20px;
            }

            >span{
                margin-left: 10px;
                margin-top:20px;
                height: 40px;
                line-height: 40px;
                font-size: 24px;
                font-weight: 700;
            }
            >.lp-usercenter-content-info-edit{
                cursor: pointer;
                font-size: 16px;
                background-color: yellowgreen;
                border-radius: 50%;
                width: 40px;
                text-align: center;
                line-height: 40px;
            }
        }

        >.lp-usercenter-content-lists{
            // background-color: white;
            display: flex;
            justify-content: space-between;

            >.lp-usercenter-content-lists-nav{
                background-color: white;
                width: 700px;

                >.lp-usercenter-tab{
                    width: 100%;
                    height: 40px;
                    display: flex;
                    border-bottom: 2px solid #e4e7ed;

                    >span{
                        cursor: pointer;
                        line-height: 40px;
                        height: 40px;
                        margin: 0 10px;
                        font-size: 14px;
                        font-family: "宋体";
                        font-weight: bold;
                    }

                    >.active{
                        border-bottom: 2px solid #e73645;
                    }
                }

            }
            >.lp-usercenter-content-lists-num{
                background-color: white;
                height: 82px;
                width: 340px;
                display: flex;
                align-items: center;

                >div{
                    flex: 1 1 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 46px;
                    

                    >span:nth-child(1){
                        font-size: 20px;
                    }

                    >span:nth-child(2){
                        margin-top: 5px;
                        font-size: 16px;
                    }
                }

                >div:nth-child(1){
                    border-right: 1px solid gray;
                }
            }
        }
    }
</style>
<!--  -->
<template>
<div class='lp-usercenter'>
    <div class='lp-usercenter-nav'>
        <div>
            <img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png">
        </div>
    </div>
    <div class='lp-usercenter-content'>
        <div class='lp-usercenter-content-bg'>
            <img src="//s3.pstatp.com/site/tt_mfsroot/pc_img/bg_profile.png">
        </div>
        <div class='lp-usercenter-content-info'>
            <img src="//sf1-ttcdn-tos.pstatp.com/img/pgc-image/f6cc8e95467f44e3bcdcf9d4ca0a58f6~120x256.image">
            <span>name</span>
            <span class="lp-usercenter-content-info-edit">edit</span>
        </div>

        <div class='lp-usercenter-content-lists'>
            fsdfd
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

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
                font-size: 16px;
                background-color: yellowgreen;
                border-radius: 50%;
                width: 40px;
                text-align: center;
                line-height: 40px;
            }
        }

        >.lp-usercenter-content-lists{
            background-color: white;
        }
    }
</style>
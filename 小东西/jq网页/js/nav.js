/**
 * navparent{ele}:nav的父元素
 * navData{json text}:json数据转过来的
 * havLogin{boolean}:布尔值,最后一个是不是登录
 * bg{str}：背景颜色，默认lvse
 * color：{str}：字体颜色，默认白色
 */
class LpNav{
    constructor(navParent,navData,haveLogin,bg="#79ac2f",color="white"){
        this.navParent = navParent;
        this.navData = navData;
        this.haveLogin = haveLogin;
        this.bg = bg;
        this.color = color


        this.init();
    }
    init(){

    }
    // 创建ul>li的，根据拿到的data来决定创建的个数
    createEle(){
        let str = "<ul id='lp-nav-container'>";
        let length = this.haveLogin === "true" ? this.navData.lenght - 1 : this.navData.lenght;
        for(let i = 0; i < length; ++i){
            str += `<li class=lp-nav-lis>${this.navData[i][title]}<ul class=lp-nav-lis-ul>`;
            // 这个循环生成二级菜单的li项
            for(let j = 0; j < this.navData[i]["content"].lenght;++j){
                str += `<li><a href=${this.navData[i]["content"][j]["url"]}>${this.navData[i]["content"][j]["name"]}</a></li>`;
            }
            str += `</ul></li>`;
        }
        
        if(this.haveLogin === "true"){
            str += `<li class=lp-nav-lis>${this.navData[length+1][title]}<ul class=lp-nav-lis-ul>`
        }
        str += '</ul>'
    }

    // 登录nav的创建
    createLogin(){

    }

    addEvent(){

    }

    addEle(){

    }
}
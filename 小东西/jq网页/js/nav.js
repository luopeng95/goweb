/**
 * navparent{ele}:nav的父元素
 * navData{json text}:json数据转过来的
 * havLogin{boolean}:布尔值,最后一个是不是登录
 * bg{str}：背景颜色，默认lvse
 * color：{str}：字体颜色，默认白色
 */
class LpNav {
    constructor(navParent, navData, haveLogin, bg = "#79ac2f", color = "white") {
        this.navParent = document.getElementById(navParent);
        this.navData = navData;
        this.haveLogin = haveLogin;
        this.bg = bg;
        this.color = color


        this.init();
    }
    init() {
        this.createEle();
        this.createLogin();
        this.addEle();
        this.addEvent();
    }
    // 创建ul>li的，根据拿到的data来决定创建的个数
    createEle() {
        let height = this.navParent.clientHeight;
        let str = `<ul id='lp-nav-container' style="background-color:${this.bg};">`;
        this.length = this.haveLogin === "true" ? this.navData.length - 1 : this.navData.length;
        for (let i = 0; i < this.length; ++i) {
            str += `<li class="lp-nav-lis" style="line-height:${height}px;color:${this.color};" lp-nav-id=${this.navData[i]["id"]}>${this.navData[i]["title"]}<ul class="lp-nav-lis-ul nav-lis-ul-dis"  style="top:${height}px;" lp-nav-ul-id=${this.navData[i]["id"]}>`;
            // 这个循环生成二级菜单的li项
            for (let j = 0; j < this.navData[i]["context"].length; ++j) {
                str += `<li><a href=${this.navData[i]["context"][j]["url"]} style='color:${this.bg};'>${this.navData[i]["context"][j]["name"]}</a></li>`;
            }
            str += `</ul></li>`;
        }
        if (this.haveLogin === "true") {
            str += `<li id=lp-navlogin class="lp-nav-lis" style="line-height:${height}px;color:${this.color}" lp-nav-id=${this.length}>${this.navData[this.length]["title"]}<li>`
        }
        str += '</ul>';
        // this.navParent = document.getElementById(this.navParent);
        this.navParent.innerHTML = str;
    }

    // 登录nav的创建
    createLogin() {
        let str = `<div class=lp-mask></div><div class=lp-login><li>账号：<input type="text"></li><li>密码：<input type="password"></li><li><input type="button" value="确认"><input type="button" value="取消"></li></div>`;
        document.body.innerHTML += str;
    }

    addEvent() {
        // 不用事件委托，太麻烦了，容易出错
        // 给LI绑定事件
        for (let i = 0; i < this.length; ++i) {
            this.navLi[i].addEventListener("mouseover", (e) => {
                let index = e.target.getAttribute("lp-nav-id");
                this.navLiUl[+index].classList.remove("nav-lis-ul-dis");
            })

            this.navLi[i].addEventListener("mouseout", (e) => {
                let index = e.target.getAttribute("lp-nav-id");
                this.navLiUl[+index].classList.add("nav-lis-ul-dis");
            })
        }

        // 给ul绑定事件
        for (let i = 0; i < this.navLiUl.length; ++i) {
            this.navLiUl[i].addEventListener("mouseover", (e) => {
                this.navLiUl[i].classList.remove("nav-lis-ul-dis");
                e.stopPropagation();
            })

            this.navLiUl[i].addEventListener("mouseout", (e) => {
                this.navLiUl[i].classList.add("nav-lis-ul-dis");
            })
        }
        // 登录框事件
        this.login.addEventListener("click", (e)=>{
            if(e.target.value === "确认"){
                console.log("点击了确认");
                this.mask.style.display = "none";
                this.login.style.display = "none";
            }else if(e.target.value === "取消"){
                console.log("点击了取消");
                this.mask.style.display = "none";
                this.login.style.display = "none";
            }
        })
        // 点击登录
        this.navLogin.addEventListener("click",()=>{
            this.mask.style.display = "block";
            this.login.style.display = "block";
        })
    }

    addEle() {
        this.navContainer = document.getElementById("lp-nav-container");
        this.navLi = document.getElementsByClassName("lp-nav-lis");
        this.navLiUl = document.getElementsByClassName("lp-nav-lis-ul");
        this.mask = document.getElementsByClassName("lp-mask")[0];
        this.login = document.getElementsByClassName("lp-login")[0];
        this.navLogin = document.getElementById("lp-navlogin");
    }
}
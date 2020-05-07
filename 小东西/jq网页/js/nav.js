/**
 * navparent{ele}:nav的父元素
 * navData{json text}:json数据转过来的
 * havLogin{boolean}:布尔值,最后一个是不是登录
 * bg{str}：背景颜色，默认lvse
 * color：{str}：字体颜色，默认白色
 */
class LpNav {
    constructor(navParent, navData, haveLogin, bg = "#79ac2f", color = "white") {
        this.navParent = navParent;
        this.navData = navData;
        this.haveLogin = haveLogin;
        this.bg = bg;
        this.color = color


        this.init();
    }
    init() {
        this.createEle();
        this.addEle();
        this.addEvent();
    }
    // 创建ul>li的，根据拿到的data来决定创建的个数
    createEle() {
        let height = this.navParent.clientHeight;
        let str = `<ul id='lp-nav-container' style="background-color:${this.bg};">`;
        let length = this.haveLogin === "true" ? this.navData.length - 1 : this.navData.length;
        for (let i = 0; i < length; ++i) {
            str += `<li class="lp-nav-lis" style="line-height:${height}px;" lp-nav-id=${this.navData[i]["id"]}>${this.navData[i]["title"]}<ul id=lp-nav-lis-ul class="lp-nav-lis-ul nav-lis-ul-dis"  style="top:${height}px;" lp-nav-ul-id=${this.navData[i]["id"]}>`;
            // 这个循环生成二级菜单的li项
            for (let j = 0; j < this.navData[i]["context"].length; ++j) {
                str += `<li id=lp><a href=${this.navData[i]["context"][j]["url"]}>${this.navData[i]["context"][j]["name"]}</a></li>`;
            }
            str += `</ul></li>`;
        }
        if (this.haveLogin === "true") {
            str += `<li id=lp-navlogin class="lp-nav-lis" style="line-height:${height}px;" lp-nav-id=${length}>${this.navData[length]["title"]}<li>`
        }
        str += '</ul>'
        this.navParent.innerHTML = str;
    }

    // 登录nav的创建
    createLogin() {

    }

    addEvent() {
        // 给ulNav做事件委托，让鼠标移动进去之后显示隐藏的子菜单
        this.navContainer.addEventListener("mouseover", (e) => {

            // 拿到index之后让它下面的ul展示--使用类名控制
            if (e.target.className === "lp-nav-lis") {
                if (e.target.id !== "lp-navlogin") {
                    let index = e.target.getAttribute("lp-nav-id");
                    this.navLiUl[+index].classList.remove("nav-lis-ul-dis");
                }
            } else if (e.target.id === "lp") {
                console.log(e.target.parentNode);
                e.target.parentNode.classList.remove("nav-lis-ul-dis")
            }


        })
        // 鼠标移出之后隐藏元素
        this.navContainer.addEventListener("mouseout", (e) => {
            if (e.target.className === "lp-nav-lis") {
                console.log(1);
                if (e.target.id !== "lp-navlogin") {
                    let index = e.target.getAttribute("lp-nav-id");
                    this.navLiUl[+index].classList.add("nav-lis-ul-dis");
                }
            }else if(e.target.id === "lp") {
                console.log(e.target.parentNode);
                e.target.parentNode.classList.add("nav-lis-ul-dis")
            }

        })
    }

    addEle() {
        this.navContainer = document.getElementById("lp-nav-container");
        this.navLiUl = document.getElementsByClassName("lp-nav-lis-ul");

    }
}
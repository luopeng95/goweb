/**
 * parentName[str]:要设置选项卡的容器的类名
 * json[json]：json数据
 */

class LpMenu {
    constructor(parentName, json) {
        this.parentName = parentName;
        this.json = json;
        this.init();
    }

    init() {
        this.createEle();
        this.getEle();
        this.setEle();
        this.addEvent();
        this.setinter();
    }

    // 创建节点
    createEle() {
        let str = "<ul id='lp-menu-title'>";
        let str1 = "<ul id=lp-menu-context>";
        let str6 = "";

        // for循环来创建title和内容 
        for (let i = 0; i < this.json.length; ++i) {
            str += `<li class=lp-menu-lis lp-menu-title-id=${i}>${this.json[i]["title"]}</li>`;
            let str2 = "<ul class=lp-menu-context-ul1>";
            let str3 = "<ul class=lp-menu-context-ul2>";
            let str4 = "<ul class=lp-menu-context-ul3>";
            let str5 = "<ul class=lp-menu-context-ul4>";
            str6 += `<li class=lp-menu-ctx>`;
            // console.log(this.json[i]["ul1"].length);
            for (let j = 0; j < this.json[i]["ul1"].length; ++j) {
                str2 += `<div>${this.json[i]["ul1"][j]}</div>`;
                str3 += `<div>${this.json[i]["ul2"][j]}</div>`;
                str4 += this.json[i]["img1"][j] ? `<div style='background-image:url(${this.json[i]["img1"][j]})' class=lp-menu-ctx-ul3></div>` : "";
                str5 += this.json[i]["img2"][j] ? `<div style='background-image:url(${this.json[i]["img2"][j]})' class=lp-menu-ctx-ul4></div>` : "";
            }
            str2 += `</ul>`;
            str3 += `</ul>`;
            str4 += `</ul>`;
            str5 += `</ul>`;
            str6 += str2 + str3 + str4 + str5 + "</li>";
        }
        str += `</ul>`;
        str1 += str6 + `</ul>`;

        this.parent = document.getElementsByClassName(this.parentName)[0];
        this.parent.innerHTML += str + str1;
    }

    // 获取元素节点
    getEle() {
        this.context = document.getElementById("lp-menu-context");
        this.title = document.getElementById("lp-menu-title");
        this.menuLis = document.getElementsByClassName("lp-menu-lis");
        this.menuCtx = document.getElementsByClassName("lp-menu-ctx");
        


    }

    // 设置元素属性
    setEle() {
        this.menuLis[0].classList.add("lp-menu-title-select");
        this.menuCtx[0].classList.add("lp-menu-context-select");

        
    }

    // 添加事件
    addEvent() {
        // title的点击事件添加类名，改变背景颜色和字体颜色
        this.title.addEventListener("click", (e) => {
            // 让其他title全部去掉类名
            for (let i = 0; i < this.menuLis.length; ++i) {
                this.menuLis[i].classList.remove("lp-menu-title-select");
                this.menuCtx[i].classList.remove("lp-menu-context-select");
            }
            let index = +e.target.getAttribute("lp-menu-title-id");
            e.target.classList.add("lp-menu-title-select");
            this.menuCtx[index].classList.add("lp-menu-context-select");

            // 重新设置定时器
            clearInterval(this.timer1);
            // this.getEle();
            this.setinter();
        })

        // 浏览器丢失焦点事件
        window.addEventListener("visibilitychange", () => {
            if (document["hidden"]) {
                console.log("丢失焦点")
                clearInterval(this.timer1);
            } else {
                console.log("获得焦点")
                this.setinter();
            }
        })
    }

    // 设置选项卡里面的两个定时器
    setinter() {
        this.ul3 = document.getElementsByClassName("lp-menu-context-select")[0].getElementsByClassName("lp-menu-context-ul3")[0];
        this.ul4 = document.getElementsByClassName("lp-menu-context-select")[0].getElementsByClassName("lp-menu-context-ul4")[0];
        this.selectImg1 = document.getElementsByClassName("lp-menu-context-select")[0].getElementsByClassName("lp-menu-ctx-ul3");
        this.selectImg2 = document.getElementsByClassName("lp-menu-context-select")[0].getElementsByClassName("lp-menu-ctx-ul4");
        this.height = this.selectImg1[0].clientHeight;
        this.width = this.selectImg2[0].clientWidth;

        this.timer1 = setInterval(() => {
            this.changMarginTop();
            setTimeout(() => {
                this.changMarginLeft();
            }, 1500)
        }, 3000)
    }

    changMarginTop() {
        let move = this.height / 100;
        this.timerMT = setInterval(() => {
            let mt = parseFloat(getComputedStyle(this.selectImg1[0]).marginTop);
            if (mt - move > -this.height) {
                this.selectImg1[0].style.marginTop = mt - move + "px";
            } else {
                this.selectImg1[0].style.marginTop = -this.height + "px";
                this.selectImg1[0].style.marginTop = 0;
                this.ul3.appendChild(this.selectImg1[0]);
                this.selectImg1[0].style.marginTop = 0;
                clearInterval(this.timerMT);
            }
        }, 5)
    }

    changMarginLeft() {
        let move = this.width / 100;
        let mt = 0;
        this.timerML = setInterval(() => {
            if (mt - move > -this.width) {
                mt -= move;
                this.selectImg2[0].style.marginLeft = mt - move + "px";
            } else {
                this.selectImg2[0].style.marginLeft = -this.width + "px";
                this.selectImg2[0].style.marginLeft = 0;
                this.ul4.appendChild(this.selectImg2[0]);
                this.selectImg2[0].style.marginLeft = 0;
                clearInterval(this.timerML);
            }
        }, 5)
    }
}
/**
 * 传入轮播图的父级和图片的个数就好，往插件方面优化
 * imgParent[DOM]:img图片li的ul的id名字
 * cicreParent[DOM]:小圆点li的ul
 * cicreClassName[str]:小圆点设置背景的className
 * 图片的li需要设置data-id，顺序为2-0-1这样的，最后一张放在开头
 * 小圆点的li需要设置data-class，顺序0-1-2这样正常排序即可
 */

class SideBanner {
    constructor(imgParent, imgCount, imgArray) {
        this.parent = imgParent;
        this.imgCount = imgCount;               //图片li的个数
        this.imgArray = imgArray;            //图片的地址数组
        this.flag = true;                       //箭头的冷却时间
        this.init();
    }

    // init() {
    //     this.createEle();
    // }
    init() {
        this.createEle();
        this.getEle();
        this.setAttr();
        this.changeImgLi();
        this.cicreBg();
        this.setInter();
        this.addEven();
    }

    // 初始化图片和分页器出来
    createEle() {
        let str = ``;
        str += `<ul id="lp-banner-ul1">`;
        str += `<li class="lp-imgLi" data-id=${this.imgArray.length - 1}><img src=${this.imgArray[this.imgArray.length - 1]["url"]}></li>`;
        for (let i = 0; i < this.imgArray.length - 1; ++i) {
            str += `<li class="lp-imgLi" data-id=${i}><img src=${this.imgArray[i]["url"]}></li>`
        }
        str += `</ul>`;

        str += `<ul id="lp-banner-ul2">`;
        for (let i = 0; i < this.imgArray.length; ++i) {
            str += `<li data-class=${i} class="lp-cicreLi"></li>`
        }
        str += `</ul>`;
        this.parent = document.querySelector(`#${this.parent}`);
        str += `<div id="lp-banner-left" class=lp-banner-jiantou></div><div id="lp-banner-right" class=lp-banner-jiantou></div>`
        this.parent.innerHTML += str;
    }

    // 获取元素
    getEle() {
        // debugger;、
        this.imgParent = document.getElementById("lp-banner-ul1");
        this.cicreParent = document.getElementById("lp-banner-ul2");
        this.imgLis = this.imgParent.getElementsByTagName("li");//img的li集合
        this.cicreLis = this.cicreParent.getElementsByTagName("li");//小圆点的li集合
        this.iNow = 0;                          //初始化iNow的值为0
        this.oBodyMaxWidth = window.screen.availWidth - 17;//页面的最大宽度
        this.oWidth = this.parent.clientWidth;//设置一开始的一屏宽度，在发生resize的时候要重新赋值
        this.cicreClassName = "selectLi";   //小圆点设置背景的className
        this.oBodyMaxWidth = window.screen.availWidth - 17;//页面的最大宽度
        this.oWidth = window.innerWidth <= 1200 ? 1200 : window.innerWidth;//设置一开始的一屏宽度，在发生resize的时候要重新赋值
        this.leftArrow = document.getElementById("lp-banner-left");
        this.rightArrow = document.getElementById("lp-banner-right");
    }

    // 设置元素的属性
    setAttr() {
        this.parent.style.overflow = "hidden";
        this.parent.style.position = "relative";
        // 默认隐藏小圆点
        this.cicreParent.style.opacity = 0;
        // 隐藏箭头
        this.leftArrow.style.opacity = 0;
        this.rightArrow.style.opacity = 0;
    }

    // 设置事件
    addEven() {
        // 小圆点点击事件
        this.cicreParent.addEventListener("click", (e) => {
            // console.log("小圆点点击事件");
            let num = +e.target.getAttribute("data-class");
            let abs = Math.abs(num - this.iNow);
            this.clearTimer1();
            this.clearTimer2();
            if (num > this.iNow) {
                this.changeMargin("left", abs);
            } else if (num < this.iNow) {
                this.changeMargin("right", abs);
            } else {
                this.changeImgLi();
                this.setInter();
            }
        })

        // 定义窗口改变事件
        window.addEventListener("resize", () => {
            this.oWidth = document.body.scrollWidth;
            // console.log(document.body.scrollWidth);
            this.changeImgLi();
            this.clearTimer1();
            this.clearTimer2();
            // this.cicreParent.style.left = `${this.oWidth / this.oBodyMaxWidth * 50}%`;
            this.setInter();
        })

        // 浏览器丢失焦点事件
        window.addEventListener("visibilitychange", () => {
            if (document["hidden"]) {
                // console.log("丢失焦点")
                this.clearTimer2();
            } else {
                // console.log("获得焦点")
                this.setInter();
            }
        })

        // 鼠标移入事件
        // console.log(this.parent);
        this.parent.addEventListener("mouseover", () => {
            // console.log("鼠标移入事件");
            this.clearTimer2();
            this.cicreParent.style.opacity = 1;
            this.leftArrow.style.opacity = .5;
            this.rightArrow.style.opacity = .5;
        })
        // 鼠标移出事件
        this.parent.addEventListener("mouseout", () => {
            // console.log("鼠标移出事件");
            this.setInter();
            this.cicreParent.style.opacity = 0;
            this.leftArrow.style.opacity = 0;
            this.rightArrow.style.opacity = 0;
        })

        this.leftArrow.addEventListener("click",()=>{
            if(this.flag){
                this.changeMargin("right");
                this.flag = false;
                this.setOneTime();
            }
        })
        this.rightArrow.addEventListener("click",()=>{
            if(this.flag){
                this.changeMargin("left");
                this.flag = false;
                this.setOneTime();
            }
        })
    }

    // 渲染图片的width和设置第一张图片的marginleft
    changeImgLi() {
        for (let i = 0; i < this.imgLis.length; ++i) {
            this.imgLis[i].style.width = this.oWidth + "px";
        }
        this.imgLis[0].style.marginLeft = -this.oWidth + "px";
    }
    // 设置外定时器
    setInter() {
        // console.log("外定时器开始工作");
        this.timer2 = setInterval(() => {
            this.changeMargin("left");
        }, 3000)
    }
    // 移动时改变第一张图片的marginleft
    changeMargin(type, count = 1) {
        let move = this.oWidth / 50;
        let defaultCount = 1;
        // 设置内定时器
        this.timer1 = setInterval(() => {
            // debugger;
            let marginLeft = parseInt(getComputedStyle(this.imgLis[0]).marginLeft);
            if (marginLeft >= 0 || marginLeft <= -2 * this.oWidth) {
                clearInterval(this.timer1);
                this.changeEle();
                this.cicreBg();
                if (count - defaultCount > 0) {
                    return this.changeMargin(type, --count);
                } else {
                    // this.clearTimer2();
                    // this.setInter();
                    return null;
                }
            } else {
                switch (type) {
                    case "left":
                        if (marginLeft - move < -2 * this.oWidth) {
                            this.imgLis[0].style.marginLeft = -2 * this.oWidth + "px";
                        } else {
                            this.imgLis[0].style.marginLeft = marginLeft - move + "px";
                        }
                        break;
                    case "right":
                        if (marginLeft + move > 0) {
                            this.imgLis[0].style.marginLeft = 0;
                        } else {
                            this.imgLis[0].style.marginLeft = marginLeft + move + "px";
                        }
                        break;
                }
            }
        }, 17)
    }
    // 改变节点顺序和设置marginleft与iNow的函数
    changeEle() {
        let marginLeft = parseInt(getComputedStyle(this.imgLis[0]).marginLeft);
        if (marginLeft === 0) {
            this.imgLis[0].style.marginLeft = 0;
            this.imgParent.insertBefore(this.imgLis[this.imgLis.length - 1], this.imgLis[0]);
            this.imgLis[0].style.marginLeft = -this.oWidth + "px";
            this.iNow = +this.imgLis[1].getAttribute("data-id");
        } else {
            this.imgLis[0].style.marginLeft = 0;
            this.imgParent.appendChild(this.imgLis[0]);
            this.imgLis[0].style.marginLeft = -this.oWidth + "px";
            this.iNow = +this.imgLis[1].getAttribute("data-id");
        }
    }
    // 小圆点背景的设置
    cicreBg() {
        for (let i = 0; i < this.cicreLis.length; ++i) {
            if (i === this.iNow) {
                // console.log("小圆点");
                this.cicreLis[i].classList.add(this.cicreClassName);
            } else {
                this.cicreLis[i].classList.remove(this.cicreClassName);
            }
        }
    }

    clearTimer1() {
        clearInterval(this.timer1);
    }
    clearTimer2() {
        clearInterval(this.timer2);
    }
    setOneTime(){
        setTimeout(() => {
            this.flag = true;
        }, 1000);
    }
}
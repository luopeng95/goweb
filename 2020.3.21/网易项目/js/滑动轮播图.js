/**
 * imgParent[DOM]:img图片li的ul
 * cicreParent[DOM]:小圆点li的ul
 * cicreClassName[str]:小圆点设置背景的className
 * 图片的li需要设置data-id，顺序为2-0-1这样的，最后一张放在开头
 * 小圆点的li需要设置data-class，顺序0-1-2这样正常排序即可
 */

class sideBanner{
    constructor(imgParent, cicreParent, cicreClassName){
        this.imgParent = imgParent;             //img图片li的ul
        this.cicreParent = cicreParent;         //小圆点li的ul
        this.imgLis = this.imgParent.getElementsByTagName("li");//img的li集合
        this.cicreLis = this.cicreParent.getElementsByTagName("li");//小圆点的li集合
        this.iNow = 0;                          //初始化iNow的值为0
        this.oBodyMaxWidth = window.screen.availWidth - 17;//页面的最大宽度
        this.oWidth = document.body.scrollWidth;//设置一开始的一屏宽度，在发生resize的时候要重新赋值
        this.cicreClassName = cicreClassName;   //小圆点设置背景的className
        this.init();
    }
    init(){
        this.changeImgLi();
        this.cicreBg();
        this.setInter();
        this.cicreParent.addEventListener("click", (e)=>{
            // console.log("小圆点点击事件");
            let num = +e.target.getAttribute("data-class");
            let abs = Math.abs(num - this.iNow);
            this.clearTimer1();
            this.clearTimer2();
            if(num > this.iNow){
                    this.changeMargin("left", abs);
            }else if(num < this.iNow){
                    this.changeMargin("right", abs);
            }
        })
        window.addEventListener("resize", ()=>{
            this.changeImgLi();
            this.oWidth = document.body.scrollWidth;
            this.clearTimer1();
            this.clearTimer2();
            this.cicreParent.style.left = `${this.oWidth / this.oBodyMaxWidth * 47}%`;
            this.setInter();
        })
        window.addEventListener("visibilitychange", () => {
            if (document["hidden"]) {
                // console.log("丢失焦点")
                this.clearTimer2();
            } else {
                // console.log("获得焦点")
                this.setInter();
            }
        })
        this.imgParent.addEventListener("mouseover", ()=>{
            // console.log("鼠标移入事件");
            this.clearTimer2();
        })
        this.imgParent.addEventListener("mouseout", ()=>{
            // console.log("鼠标移出事件");
            this.setInter();
        })
    }
    // 渲染图片的width和设置第一张图片的marginleft
    changeImgLi(){
        for(let i = 0; i < this.imgLis.length; ++i){
            this.imgLis[i].style.width = this.oWidth + "px";
        }
        this.imgLis[0].style.marginLeft = -this.oWidth + "px";
    }
    // 设置外定时器
    setInter(){
        this.timer2 = setInterval(() => {
            // console.log("外定时器开始工作");
            this.changeMargin("left");
        }, 3000)
    }
    // 移动时改变第一张图片的marginleft
    changeMargin(type, count = 1){
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
                if(count - defaultCount > 0){
                    return this.changeMargin(type, --count);
                }else{
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
    changeEle(){
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
    cicreBg(){
        for (let i = 0; i < this.cicreLis.length; ++i) {
            if (i === this.iNow) {
                // console.log("小圆点");
                this.cicreLis[i].classList.add(this.cicreClassName);
            } else {
                this.cicreLis[i].classList.remove(this.cicreClassName);
            }
        }
    }
    clearTimer1(){
        clearInterval(this.timer1);
    }
    clearTimer2(){
        clearInterval(this.timer2);
    }
}
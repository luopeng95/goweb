/**
 * {parent:htmlele}:要创建nav的parent
 * {num:num}：每一行有几个
 * {nums:num}：有几页
 * {data：array}：解析后的json数据
 */
class Nav {
    constructor(parent, num, nums, data) {
        this.parent = parent;
        this.num = num;
        this.nums = nums;
        this.column = 100 / num;
        this.data = data;
        this.oWidth = this.parent.clientWidth;
        this.iNow = 0;
        this.cicreClassName = "nav-selectLi";
        this.init();
    }

    init() {
        // console.log(this.data);
        this.createEle();
        this.getEle();
        this.setAttri();
        this.addEvent();
        this.cicreBg();
    }

    // 添加html元素,两行
    createEle() {
        let str = `<div id=lp-jd-nav-div style="width:calc(100% * ${this.nums})">`;
        for (let i = 0; i < this.nums; ++i) {
            str += `<ul id=lp-jd-nav-ul${i} style="grid-template-columns: repeat(5, ${this.column}%)">`
            for (let j = 1; j <= 2 * this.num; ++j) {
                str += `<li><a href=#><img src=${this.data[i * 9 + j]["img"]}><span>${this.data[i * 9 + j]["title"]}</span></a></li>`
            }
            str += `</ul>`;
        }
        str += `<ul id=lp-jd-nav-cicre style="display:flex;">`;
        for(let i = 0; i < this.nums; ++i){
            str += `<li data-class=${i} class="lp-nav-cicreLi"></li>`;
        }
        str += `</ul>`;


        str += `</div>`;

        this.parent.innerHTML += str;
    }

    // 获取html标签元素
    getEle() {
        this.div = document.getElementById("lp-jd-nav-div");
        this.uls = this.div.getElementsByTagName("ul");
        this.cicreParent = document.getElementById("lp-jd-nav-cicre");
        this.cicreLis = this.cicreParent.getElementsByTagName("li");
    }

    // 设置元素属性
    setAttri() {
        // this.div.style.width = `calc(100% * ${this.nums})`
    }

    // 添加事件
    addEvent() {
        // 做一个touchstart事件
        this.parent.addEventListener("touchstart", (e) => {
            // console.log(e);
            this.pageX = e.touches[0]["pageX"];
        })

        // 给nav做一个touchend事件
        this.parent.addEventListener("touchend", (e) => {
            this.pageX -= e.changedTouches[0]["pageX"]
            let marginLeft = parseInt(getComputedStyle(this.div).marginLeft);
            // console.log(marginLeft);
            // console.log(this.pageX);
            if (this.pageX > 0.25 * document.documentElement.clientWidth) {
                if(marginLeft === 0){
                    this.touch("right");
                    ++this.iNow;
                }
                e.preventDefault();
            } else if (this.pageX < -0.25 * document.documentElement.clientWidth) {
                if(marginLeft === -this.oWidth){
                    this.touch('left');
                    --this.iNow;
                }
                e.preventDefault();
            }
        })
    }


    // 改变this.div的marginleft值
    changeMargin(type) {
        let move = this.oWidth / 50;
        // 设置内定时器
        this.timer1 = setInterval(() => {
            // debugger;
            let marginLeft = parseInt(getComputedStyle(this.div).marginLeft);
                switch (type) {
                    case "right":
                        if(marginLeft <= -this.oWidth){
                            clearInterval(this.timer1);
                            this.cicreBg();
                        }else{
                            if (marginLeft - move < -this.oWidth) {
                                this.div.style.marginLeft = -this.oWidth + "px";
                            } else {
                                this.div.style.marginLeft = marginLeft - move + "px";
                            }
                        }
                        break;
                    case "left":
                        if(marginLeft >= 0){
                            clearInterval(this.timer1);
                            this.cicreBg();
                        }else{
                            if (marginLeft + move > 0) {
                                this.div.style.marginLeft = 0;
                            } else {
                                this.div.style.marginLeft = marginLeft + move + "px";
                            }
                        }
                        break;
                }
        }, 17)
    }

    // 滑动事件
    touch(type){
        this.clearTimer1();
        this.changeMargin(type);
    }

    // 小圆点背景的设置
    cicreBg(){
        for (let i = 0; i < this.cicreLis.length; ++i) {
            if (i === this.iNow) {
                console.log("小圆点");
                this.cicreLis[i].classList.add(this.cicreClassName);
            } else {
                this.cicreLis[i].classList.remove(this.cicreClassName);
            }
        }
    }

    clearTimer1(){
        clearInterval(this.timer1);
    }
}
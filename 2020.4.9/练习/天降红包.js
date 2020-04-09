// 初始化页面属性,让DIV一直保持一屏的宽高
let oDiv = document.getElementById("container");
function initDiv(){
    let maxWidth = document.documentElement.clientWidth;
    let maxHeight = document.documentElement.clientHeight;
    oDiv.style.width = maxWidth + "px";
    oDiv.style.height = maxHeight + "px";
}
window.addEventListener("resize", ()=>{
    initDiv();
})
initDiv();

let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    tag.innerHtml = text;
    for(let i in attr){
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}
 

class RedBag {
    // 静态属性初始化
    constructor(width, height, x, y, background, time, speed){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.background = background;
        this.time = time;
        this.speed = speed;
    }

    // 初始化原型方法
    init(){
        let ele = this.createDiv(oDiv);
        this.redBagMove(ele);
    }

    // 建立红包DIV
    createDiv(parent){
        let maxWidth = document.documentElement.clientWidth;
        let maxHeight = document.documentElement.clientHeight;
        let div = appendEle(parent, "div", "", {});

        let oimg = appendEle(div, "img", "", {"src":this.background});
        oimg.style.width = this.width;
        oimg.style.height = this.height;

        div.style.position = "absolute";
        // 需要判断初始给的y是否会让红包超出宽度
        if(this.y >= maxWidth - parseInt(this.width)){
            div.style.left = maxWidth - parseInt(this.width) + "px";
        }else{
            div.style.left = this.y + "px";
        }
        if(this.x >= maxHeight - parseInt(this.x)){
            div.style.top = maxHeight - parseInt(this.x) + "px";
        }else{
            div.style.top = this.x + "px";
        }
        div.style.width = this.width;
        div.style.height = this.height;
        return div;
    }

    // 红包的移动时间与速度
    redBagMove(ele){
        setTimeout(() => {
            let time = setInterval(() => {
                let maxHeight = document.documentElement.clientHeight;
                this.x = +this.x + this.speed;
                if(this.x >= maxHeight - parseInt(this.height)){
                    ele.style.top = (maxHeight - parseInt(this.height) + "px");
                    // ele.style.display = "none";
                    // ele.style.top = "0px";
                    this.removeDiv(ele);
                    clearInterval(time);
                }else{
                    ele.style.top = this.x + "px";
                }
            }, 60);
        }, this.time);
    }

    // 删除DIV
    removeDiv(ele){
        oDiv.removeChild(ele);
    }

    
}
    // 随机产生区间数字
    function rand(m, n){
        let num;
        if( m > n){
            num = Number.parseInt(Math.random() * (m - n) + n);
        }else{
            num = Number.parseInt(Math.random() * (n - m) + m);
        }
        return num;
    }

    // 不超出宽度的left,兼容改变窗口大小的情况，封装成函数
    function randY (){
        let maxWidth = document.documentElement.clientWidth;
        return rand(0, maxWidth);
    }

// 产生100个红包
for(let i = 0; i < 100; ++i){
    setTimeout(() => {
        let red1 = new RedBag("50px", "70px", "0", randY(), "timg.jpg", rand(1,11) * 1000, rand(25, 51));
        red1.init();
    }, rand(0,51) * 1000);
}
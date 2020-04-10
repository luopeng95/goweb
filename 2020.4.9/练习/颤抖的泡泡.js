let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    tag.innerHtml = text;
    for(let i in attr){
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}
let oDiv = document.getElementById("main");
let obut = document.getElementById("but");

class Pop{
    constructor(width, height, x, y, background, time){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.background = background;
        this.time = time;
    }

    init(){
        let oDiv = document.getElementById("main");
        let pop = this.createDiv(oDiv);
        let ti = this.popMove(pop);
        // pop.addEventListener("click", (e)=>{
        //     clearInterval(ti);
        // })
        pop.addEventListener("mousedown", (event)=>{
            let e = event || window.event;
            this.popMousemove(e, oDiv, pop, ti)
        })
        pop.addEventListener("mouseup", ()=>{
            ti = this.popMove(pop);
        })
    }

    // 建立泡泡DIV
    createDiv(parent){
        let maxWidth = parent.clientWidth;
        let maxHeight = parent.clientHeight;
        let div = appendEle(parent, "div", "", {"class":"pop"});
        div.style.backgroundImage = this.background;
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
        // let oimg = appendEle(div, "img", "", {"src":this.background});
        // oimg.style.width = this.width;
        // oimg.style.height = this.height;
        return div;
    }

    // 泡泡的移动
    popMove(pop){
        let timer;
        let timer2;
        timer = setInterval(() => {
            let top = rand(0, oDiv.clientHeight - pop.clientHeight);
            let left = rand(0, oDiv.clientWidth - pop.clientWidth);
            let popX = pop.offsetLeft;
            let popY = pop.offsetTop;
            let movey = (top - pop.offsetTop) / 20;
            let movex = (left - pop.offsetLeft) / 20;
            let count = 0;
            timer2 = setInterval(() => {
                pop.style.top = pop.offsetTop + movey + "px";
                pop.style.left =  pop.offsetLeft + movex + "px";
                ++count;
                if(count === 20){
                    count = 0;
                    clearInterval(timer2);
                }
            }, 60);
        }, 1300);
        return timer;
    }

    // 泡泡拖曳
    popMousemove(e, parent, pop, ti, ){
        let popMove = this.popMove;
        // let ti;
        clearInterval(ti);
        let diffX = e.clientX - pop.offsetLeft;
        let diffY = e.clientY - pop.offsetTop;
        document.onmousemove = function (e) {
            // console.log(moveX, moveY);
            let moveX = e.clientX - diffX;
            let moveY = e.clientY - diffY;
            if (moveX < 0) {
                moveX = 0;
            } else if (moveX > parent.clientWidth - pop.clientWidth) {
                moveX = parent.clientWidth - pop.clientHeight;
            }
            if (moveY < 0) {
                moveY = 0;
            } else if (moveY > parent.clientHeight - pop.clientHeight) {
                moveY = parent.clientHeight - pop.clientHeight;
            }
            console.log(pop.clientHeight);
            pop.style.top = moveY + "px";
            pop.style.left = moveX + "px";
        }
        document.onmouseup = function () {
            // ti = popMove(pop);
            document.onmousemove = null;
            document.onmouseup = null;
            // return ti
        }
    }


}

    // 随机产生区间数字
function rand(m, n) {
    let num;
    if (m > n) {
        num = Number.parseInt(Math.random() * (m - n) + n);
    } else {
        num = Number.parseInt(Math.random() * (n - m) + m);
    }
    return num;
}
obut.addEventListener("click", (e) =>{
    new Pop("80px", "80px", rand(0, oDiv.clientWidth), rand(0, oDiv.clientHeight), "blue").init();
})
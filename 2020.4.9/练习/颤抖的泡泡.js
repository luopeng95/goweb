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
        let ele = this.createDiv(oDiv);
        this.redBagMove(ele);
    }

    // 建立红包DIV
    createDiv(parent){
        let maxWidth = parent.clientWidth;
        let maxHeight = parent.clientHeight;
        let div = appendEle(parent, "div", "", {});
        div.style.backgroundImage = this.background;

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
}
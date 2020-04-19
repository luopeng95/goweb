let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    tag1.innerHTML = text;
    for (let i in attr) {
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}

class Page{
    // num 是一页展示的个数，nums是一共有多少个资源
    constructor(parent, num, nums, width){
        this.parent = parent;
        this.num = Math.ceil(nums / num);
        this.iNow = 1;
        this.init();
        this.left = 1;      //默认的左边界
        this.right = 4;     //默认的右边界
        this.width = width  //分页div的宽度
    }
    init(){
        this.insertEle();
        this.insertDiv();
    }

    // 插入节点
    insertEle(){
        this.ul =  appendEle(this.parent, "ul", `<li id="page_arrowLeft"><img src="../images/左箭头.png" style="width:100%;height:100%" id="page_left"></li>
        <li id="page_main"></li>
        <li id="page_arrowRight"><img src="../images/右箭头.png" style="width:100%;height:100%" id="page_right"></li>`, {"style":"width:222px;height:30px;position:absolute;display:flex;bottom:0;right:260px;","class":"page"});
        // let pageMain = this.ul.getElementsByTagName("li")[1];
        
    }
    // 拆分div的添加函数
    insertDiv(){
        let pageMain = document.getElementById("page_main");
        pageMain.innerHTML = "";
        for(let i = 0; i < this.num; ++i){
            pageMain.innerHTML += `<div data-id="${i + 1}">${i+1}</div>`;
        }
    }


    // 改变iNow的值
    changeiNow(type){
        if(type === "left" ){
            if(this.iNow > 1){
                this.iNow -= 1;
            }
        }else if(type === "right"){
            if(this.iNow < this.num){
                this.iNow += 1;
            }
        }else{
            this.iNow = type;
        }
    }

    // 渲染div背景
    changeBg(){
        let oDiv = this.ul.getElementsByTagName("div");
        for(let i = 0; i < oDiv.length; ++i){
            if(+oDiv[i].getAttribute("data-id") === this.iNow){
                oDiv[i].style.backgroundColor = "#9eeb74";
            }else{
                oDiv[i].style.backgroundColor = "";
            }
        }
    }

    // 当选项卡移动到边界时改变边界
    changeBound(){
        if(this.iNow > this.right){
            this.changeMarginLeft("left");
            this.right = this.iNow;
            this.left = this.iNow - 3;
        }else if(this.iNow < this.left){
            this.changeMarginLeft("right");
            this.left = this.iNow;
            this.right = this.iNow + 3;
        }
    }

    // 改变边界marginLeft
    changeMarginLeft(type){
        let pageMain = document.getElementById("page_main").getElementsByTagName("div")[0];
        if(type === "left"){
            console.log(pageMain)
            pageMain.style.marginLeft = parseInt(getComputedStyle(pageMain).marginLeft) - this.width + "px";
        }else if(type === "right"){
            pageMain.style.marginLeft = parseInt(getComputedStyle(pageMain).marginLeft) + this.width + "px";
        }
    }
}
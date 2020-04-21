/*
 * 待优化点：   1.登录弹窗加上正则验证和获取输入成功登录后的样式
 *             2.视频标签优化
 * 
 * 分页切换的时候出现了偶然的Bug但是没有复现出来！！！
 */
let obody = document.body;
let product = [{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2523,"rmb":1350},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":693,"rmb":150},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":378378,"rmb":120},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":57863,"rmb":578},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":278,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":378,"rmb":278},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3783,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":27,"rmb":278},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-1.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-3.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10},{"url":"../images/1-4.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":3958,"rmb":10}]
let program = [{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345},{"url":"../images/1-2.jpg","title":"数值设计：伟大的设计","source":"飞盒课程派","num":2742,"rmb":342345}]
let olis = document.getElementById("content_left_ul").getElementsByTagName("li");
let olis2 = document.getElementById("content_left_ul2").getElementsByTagName("li");
let oUl = document.getElementById("content_left_ul");
let oUl2 = document.getElementById("content_left_ul2");
let timer123;
console.log(product.length);
// 关闭提醒
function closeRemind() {
    let div = document.getElementById("remind");
    div.style.display = "none";
}
function init() {
    // 初始化banner对象
    let oul1 = document.getElementById("banner_ul");    //轮播图img
    let oul2 = document.getElementById("banner_ul2");   //小圆点
    let optionS = document.getElementsByClassName("content_left_option")[0];
    new sideBanner(oul1, oul2, "selectLi");
    let focus = document.getElementsByClassName("nav_left_but1")[0];
    let maxWidth = parseInt(getComputedStyle(document.querySelector(".content_right_ul>li>a")).marginBottom) + document.querySelector(".content_right_ul>li>a").offsetHeight;
    contentUl[0].style.marginTop = -maxWidth + "px";
    let sel = "product";      //代表当前选项卡选的是什么类别
    
    console.log(product[20]);
    timer123 = setInterval(()=>{
        changeMarginTop(maxWidth);
    }, 17)

    focus.addEventListener("click", (e) => {
        mask();
    })
    // 切换选项卡的时候重排翻页div
    optionS.addEventListener("click", (e)=>{
        if(e.target.innerHTML === "产品设计"){
            oUl.style.display = "block";
            page.num = Math.ceil(product.length / 20);
            page.iNow = 1;
            page.insertDiv();
            page.changeBg();
            // 还要重置边界值
            page.left = 1;
            page.right = 4;
            draw(olis, product, page.iNow);
            oUl2.style.display = "none";
            sel = "product";
        }else if(e.target.innerHTML === "编程语言"){
            oUl2.style.display = "block";
            page.num = Math.ceil(program.length / 20);
            page.iNow = 1;
            page.insertDiv();
            page.changeBg();
            // 还要重置边界值
            page.left = 1;
            page.right = 4;
            draw(olis2, program ,page.iNow);
            oUl.style.display = "none";
            sel = "program";
        }
    });
    document.getElementsByClassName("content_right_ul")[0].addEventListener("mouseover", ()=>{
        clearInterval(timer123);
    })
    document.getElementsByClassName("content_right_ul")[0].addEventListener("mouseout", ()=>{
        timer123 = setInterval(()=>{
            changeMarginTop(maxWidth);
        }, 17)
    })

    page.ul.addEventListener("click", (e) => {
        if(e.target.id === "page_left"){
            console.log("左箭头");
            page.changeiNow("left");
            page.changeBg();
            page.changeBound();
            
            if(sel === "product"){
                draw(olis, product, +page.iNow);
            }else{
                draw(olis2, program, +page.iNow);
            }
        }else if(e.target.id === "page_right"){
            console.log("右箭头");
            page.changeiNow("right");
            page.changeBg();
            page.changeBound();
            if(sel === "product"){
                draw(olis, product, +page.iNow);
            }else{
                draw(olis2, program ,+page.iNow);
            }
        }else{
            page.changeiNow(+e.target.getAttribute("data-id"));
            page.changeBg();
            page.changeBound();
            if(sel === "product"){
                draw(olis, product, +page.iNow);
            }else{
                draw(olis2, program, +page.iNow);
            }
        }
    })
    draw(olis, product, +page.iNow);
}

// 生成遮罩和登录框
function mask(){
    let mask = appendEle(obody, "div", "", {"class":"mask"});
    let login = appendEle(obody, "div", `<li>账号：<input type="text"></li><li>密码：<input type="password"></li><li><input type="button" value="确认"><input type="button" value="取消"></li>`, {"class":"login"})
    login.addEventListener("click", (e)=>{
        if(e.target.value === "确认"){
            console.log("点击了确认");
            mask.style.display = "none";
            login.style.display = "none";
        }else if(e.target.value === "取消"){
            console.log("点击了取消");
            mask.style.display = "none";
            login.style.display = "none";
        }
    })
}

// 处理视频标签
let ovideo = document.getElementsByTagName("video")[0];
ovideo.addEventListener("click", (e)=>{
    console.log(e.target)
})

// 渲染列表
let draw = (parentNode, product, num) => {
    for(let i = 0; i < parentNode.length; ++i){
        parentNode[i].innerHTML = "";
    }
    let total = product.length >= 20 * num ? 20 * num : product.length;
    for(let i = 20 * (num - 1); i < total; ++i){
        parentNode[parseInt((i - 20 * (num - 1)) / 4)].innerHTML += `<div>
        <img src=${product[i]["url"]}>
        <h4>${product[i]["title"]}</h4>
        <p>${product[i]["source"]}</p>
        <p><button type="button"><img src="../images/icons/people.png" alt=""> ${product[i]["num"]}</button></p>
        <p>&yen;${product[i]["rmb"]}</p>
    </div>`
    }
}

let contentUl = document.getElementsByClassName("content_right_ul")[0].getElementsByTagName("li");

// 改变marginTop值
let changeMarginTop = (maxWidth) => {
    // debugger;
    let movey = maxWidth / 70;
    if(parseInt(getComputedStyle(contentUl[0]).marginTop) - movey < -2 * maxWidth){
        contentUl[0].style.marginTop = -2 * maxWidth + "px"
        changeEle(maxWidth);
    }else{
        contentUl[0].style.marginTop = parseInt(getComputedStyle(contentUl[0]).marginTop) - movey + "px";
    }
}
// 插入节点
let changeEle = (maxWidth) => {
    contentUl[0].style.marginTop = 0;
    document.getElementsByClassName("content_right_ul")[0].appendChild(contentUl[0]);
    contentUl[0].style.marginTop = -maxWidth + "px";
}

// 翻页
let oContent = document.getElementsByClassName("content")[0];
let page = new Page(oContent, 20, product.length, 37, 4);
let pageDiv = document.getElementById("page_main").getElementsByTagName("div")
pageDiv[page.iNow - 1].style.backgroundColor = "#9eeb74";

init();
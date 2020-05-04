let download = document.querySelector("#download");
let close = document.querySelector("#download img");
let search = document.querySelector(".lp-search-d1");
let searchBox = document.querySelector(".search-index-box");
let sideShow = document.querySelector("#lp-sideShow");
const bannerCount = 5;      //banner图的数量
const navNum = 5;           //一行的nav数
const navNums = 2;          //有几页
let jdNav = document.querySelector(".lp-jd-nav");
let killSpans = document.querySelectorAll(".lp-seckill-titleL span");
let timer1;
let timer2;
let timer3
let killProduct = document.getElementsByClassName("lp-seckill-product")[0];
let touchMove;              //touch事件移动的距离和判断方向
let show = document.getElementsByClassName("lp-mxg");
let scrollNews = document.getElementsByClassName("lp-scroll_news-ul")[0];
let contentUl = scrollNews.getElementsByTagName("li");
let maxWidth = scrollNews.clientHeight;
let iNow = 0;               //为你推荐当前的页数
let commend = document.getElementsByClassName("lp-jd-recommend")[0];
let searchInput = document.getElementById("lp-jd-search-input");
let container = document.getElementById("container");
// console.log(maxH);



let init = ()=>{
    changDown();
    addEvent();
    getJson("../js/轮播图.json",createBanner);
    getJson("../js/京东nav分页.json", createNav);
    getJson("../js/jdkill.json", createKill);
    createShow();
    getJson("../js/news.json", createScroll);
    getJson("../js/为你推荐.json", createRecommend);
    timer3 =  setInterval(()=>{
        timer2 = setInterval(()=>{
            changeMarginTop(maxWidth);
        },17)
    },1500)
}
console.log(document.documentElement.clientHeight);
let addEvent = () => {
    // console.log(close);
    close.addEventListener("click",closeDown);
    killProduct.addEventListener("touchstart",(e)=>{
        touchMove = e.touches[0]["pageX"];
    })
    killProduct.addEventListener("touchmove",(e)=>{
        // console.log(e);
        // touchMove = e.changedTouches[0]["pageX"];
        let mL = parseInt(getComputedStyle(killProduct).marginLeft);
        // console.log(mL);
        let move = e.changedTouches[0]["pageX"] - touchMove;
        // console.log(move);
        if(move > 0){
            if(mL + move <= 0){
                killProduct.style.marginLeft = mL + 2 + "px";
            }
        }else if(move < 0){
            if(mL + move >= -1.5*document.documentElement.clientWidth){
                killProduct.style.marginLeft = mL - 2 + "px";
            }
        }
        touchMove = e.changedTouches[0]["pageX"];
    })
    window.addEventListener("visibilitychange", () => {
        if (document["hidden"]) {
            console.log("丢失焦点")
            clearInterval(timer3);
        } else {
            timer3 =  setInterval(()=>{
                timer2 = setInterval(()=>{
                    changeMarginTop(maxWidth);
                },17)
            },1500)
        }
    })
    window.addEventListener("scroll",()=>{
        // console.log(document.documentElement.scrollTop);
        // console.log(document.documentElement.scrollHeight - document.documentElement.clientHeight);
        if(document.documentElement.scrollTop !== 0){
            search.classList.add("lp-search-d1-fix");
        }else{
            search.classList.remove("lp-search-d1-fix");
        }
        if(document.documentElement.scrollTop >= document.documentElement.scrollHeight - document.documentElement.clientHeight - 3*load.clientHeight -500){
            getJson("../js/为你推荐.json", createRecommend);
        }
    })
    // 添加搜索框的点击事件
    searchBox.addEventListener("click",()=>{
        searchInput.style.display = "flex";
        container.style.opacity = 0;
        document.body.style.overflowY = "hidden";
    })
    // 
    searchInput.getElementsByTagName("div")[0].addEventListener("click",()=>{
        searchInput.style.display = "none";
        container.style.opacity = 1;
        document.body.style.overflow = "auto";
    })
}

// 获取本地存储，如果已经点击了关闭就不再展示
let changDown = ()=>{
    if(!localStorage.getItem("lp-close-download")){
        download.style.display = "flex";
    }else{
        setSearch();
    }
}

// 上方banner的img点击事件，点击之后隐藏div
let closeDown = () =>{
    download.style.display = "none";
    localStorage.setItem("lp-close-download","true");
    setSearch();
}

// 设置lp-search的位置
let setSearch = ()=>{
    search.style.display = "fixed";
    search.style.top = "0";
    search.style.left = "0";
}

// 设置ajax获取json文件
let getJson = (file, callback)=>{
    let ajax = new XMLHttpRequest();
    ajax.overrideMimeType("application/json");
    ajax.open("GET", file, true);
    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status == "200") {
            callback(JSON.parse(ajax.responseText));
        }
    }
    ajax.send();
}

// 生成banner轮播图
let createBanner = (data)=>{
    let side = new SideBanner(sideShow, bannerCount, data);
    return side;
}

// 生成nav
let createNav = (data)=>{
    let nav = new Nav(jdNav, navNum, navNums, data);
    return nav;
}

// 拿到当前的场次和生成倒计时并且刷新商品li
let createKill = (data)=>{
    clearInterval(timer1);
    // 获取当前时间后判断去拿哪一个索引的数据
    let dd = new Date();
    let index = Number.parseInt(dd.getHours()/2);
    // 给span添加内容
    killSpans[0].innerHTML = data[index]["title"];
    // 拿到现在离下一个场次的时间戳
    let dd2 = new Date().setHours(2 * index + 2, 0, 0);
    // 设置倒计时
    let time = (dd2 - dd)/1000;
    let time2 = time*1000;
    // console.log(time);
    killSpans[1].innerHTML = transitionTime(time);
    timer1 = setInterval(()=>{
        killSpans[1].innerHTML = transitionTime(--time);
    },1000)
    setTimeout(()=>{
        getJson("../js/jdkill.json", createKill);
    },time2)
    // 刷新商品
    let products = data[index]["kills"];
    let str = "";
    for(let i = 0; i < products.length; ++i){
        str += `<li class="lp-seckill-product-li"><img src=${products[i]["url"]}>
        <p>&yen; ${products[i]["newPrice"]}</p>
        <p>&yen; ${products[i]["oldPrice"]}</p></li>`
    }
    killProduct.innerHTML = str;
    killProduct.style.width = products.length * 2.346667 + "rem";
}

// 转换时分秒与补0
let transitionTime = (time)=> {
    time = parseInt(time);
    let h = (parseInt(time / 3600) + "").length === 1 ? "0" + parseInt(time / 3600) : parseInt(time / 3600);
    let m = (parseInt(time / 60) % 60 + "").length === 1 ? "0" + parseInt(time / 60) % 60 : parseInt(time / 60) % 60;
    let s = (time % 60 + "").length === 1 ? "0" + time % 60 : time % 60;
    return `${h}:${m}:${s}`
}

// 生成东家小院和每日逛
let createShow = ()=>{
    let str = "";
    for(let i = 0; i < 8; ++i){
        str += `<li>
        <p>免息星球</p>
        <p>白条免息购</p>
        <img src="../sources/img/mrg_img1.jpg">
    </li>`
    }
    show[0].innerHTML = str;
    show[1].innerHTML = str;
}

// 生成滚动消息
let createScroll = (data)=>{
    let str = "";
    for(let i = 0; i < data.length; ++i){
        str += `<li>
        <a href="#">
            <span class=lp-scroll_news-sp1>${data[i]["class"]}</span>
            <span class=lp-scroll_news-sp2>${data[i]["content"]}</span>
        </a>
    </li>`
    }
    scrollNews.innerHTML = str;
    contentUl[0].style.marginTop = -maxWidth + "px";
}

// 改变marginTop值----右边的轮播图
let changeMarginTop = (maxWidth) => {
    // debugger;
    let movey = maxWidth / 10;
    if(parseInt(getComputedStyle(contentUl[0]).marginTop) - movey < -2 * maxWidth){
        contentUl[0].style.marginTop = -2 * maxWidth + "px"
        changeEle(maxWidth);
        clearInterval(timer2)
    }else{
        contentUl[0].style.marginTop = parseInt(getComputedStyle(contentUl[0]).marginTop) - movey + "px";
    }
}
// 插入节点
let changeEle = (maxWidth) => {
    contentUl[0].style.marginTop = 0;
    scrollNews.appendChild(contentUl[0]);
    contentUl[0].style.marginTop = -maxWidth + "px";
}

// 初始化为你推荐的li
let createRecommend = (data)=>{
    // console.log(data.length);
    if(iNow * 20 < data.length){
        let min = iNow * 20;
        let max = (iNow + 1)*20 > data.length ? data.length : (iNow + 1)*20;
        let str = "";
        for(let i = min; i < max; ++i){
            str += `<li>
            <img src=${data[i]["url"]}>
            <p>${data[i]["content"]}</p>
            <p>&yen;${data[i]["price"]}</p>
        </li>`
        }
        commend.innerHTML += str;
        iNow++;
    }else{
        commend.appendChild(load);
        console.log("资源不够了");
    }
} 

// 给为你推荐底部加没有数据的时候显示的div
let createDiv = ()=>{
    let div = document.createElement("div");
    let txt = document.createTextNode("已经没有了哦");
    div.id = "lp-jd-loading";
    div.appendChild(txt);
    return div;
}
let load = createDiv();
init();
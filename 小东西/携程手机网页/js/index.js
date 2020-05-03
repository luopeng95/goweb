let oCainer = document.getElementById("container");
let oDiv = document.getElementsByClassName("lp-search-d1")[0];


// init初始化函数
let init = () => {
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop == 0) {
            oDiv.style.background = "rgba(0,0,0,0)";
        } else {
            oDiv.style.background = "white";
        }
    })
}

init();

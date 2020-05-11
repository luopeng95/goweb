(function () {
    const lpNav = "lp-nav";
    const lpBanner = "lp-banner";
    const lpMenu = "lp-menu";
    const lpAccordtion = "lp-accordtion";

    let init = () => {
        getJson("../js/nav.json", createNav);
        getJson("../js/banner.json", createBanner);
        getJson("../js/menu.json",createMenu);
        getJson("../js/accordtion.json",createAccordtion);
        createSup();
    }

    let getJson = (file, callback) => {
        let ajax = new XMLHttpRequest();
        ajax.overrideMimeType("application/json");
        
        ajax.open("GET", file, true);
        // ajax.setRequestHeader("If-Modified-Since","0");
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status == "200") {
                callback(JSON.parse(ajax.responseText));
            }
        }
        ajax.send();
    }



    // 调用LpNav对象生成导航栏
    let createNav = (json) => {
        new LpNav(lpNav, json, "true");
    }

    // 生成banner图
    let createBanner = (json) => {
        let side =  new SideBanner(lpBanner, 5, json);
        return side;
    }

    // 生成选项卡
    let createMenu = (json)=>{
        let menu = new LpMenu(lpMenu, json);
    }

    // 生成手风琴
    let createAccordtion = (json)=>{
        let accordtion = new LpAccordtion(lpAccordtion, json);
    }

    // 生成惊喜小球
    let createSup = () => {
        let suprise = new LpSuprise()
    }
    init();
}())
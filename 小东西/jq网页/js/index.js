(function () {
    let lpNav = document.getElementById("lp-nav");
    let lpBanner = document.getElementById("lp-banner");



    let init = () => {
        getJson("../js/banner.json", createBanner);
        getJson("../js/nav.json", createNav);
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
    init();
}())
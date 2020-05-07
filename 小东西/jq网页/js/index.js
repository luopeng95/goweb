(function(){
    let lpNav = document.getElementById("lp-nav");




let init = ()=>{
    getJson("../js/nav.json",createNav);
}

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



// 调用LpNav对象生成导航栏
let createNav = (json)=>{
    new LpNav(lpNav,json,"true");
}



init();
}())
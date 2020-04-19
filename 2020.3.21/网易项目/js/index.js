let obody = document.body;
// 关闭提醒
function closeRemind() {
    let div = document.getElementById("remind");
    div.style.display = "none";
}
function init() {
    // 初始化banner对象
    let oul1 = document.getElementById("banner_ul");
    let oul2 = document.getElementById("banner_ul2");
    new sideBanner(oul1, oul2, "selectLi");
    let focus = document.getElementsByClassName("nav_left_but1")[0];
    focus.addEventListener("click", (e) => {
        mask();
    })
}

// 插入节点
let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    console.log(text);
    tag1.innerHTML = text;
    for (let i in attr) {
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}

// 生成遮罩和登录框
function mask(){
    let mask = appendEle(obody, "div", "", {"class":"mask"});
    let login = appendEle(obody, "div", `<li>账号：<input type="text"></li><li>密码：<input type="password"></li><li><input type="button" value="确认"><input type="button" value="取消"></li>`, {"class":"login"})
    
    return mask;
}


init();
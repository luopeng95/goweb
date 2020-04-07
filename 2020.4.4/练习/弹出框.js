let deleteActive = null;
let dataArray1 = [];
let initPop = (height, width, borderColor, backgroundColor, havemask, dragable, type, message="") => {
    let obody = document.body;
    let odiv = createDiv(height, width, borderColor, backgroundColor, obody);
    window.addEventListener("resize", function (){
        resizeDiv(odiv, width, height);
    });
    if(havemask === "true"){
        mask(obody);
    }
    if(dragable === "true"){
        let omove = document.querySelector("#move");
        omove.onmousedown = function(event){
            let e = event || window.event;
            // console.log(e);
            moveDiv(e, odiv);
        }
    }
    typeDiv(type, odiv,message)

}

// 设置弹出框的宽、高、边框颜色、背景颜色
let createDiv = (height, width, borderColor, backgroundColor, obody) => {
    let div1 = document.createElement("div");
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;
    div1.id = "popUp"
    div1.style.width = width + "px";
    div1.style.height = height + "px";
    div1.style.background = `${backgroundColor}`;
    div1.style.position = "fixed";
    div1.style.top = (maxHeight - height)/2 + "px";
    div1.style.left = (maxWidth - width)/2 + "px";
    div1.style.border = `1px solid ${borderColor}`;
    div1.style.zIndex = 1000;
    let div2 = document.createElement("div");
    let otxt = document.createTextNode("可拖动DIV区域");
    div2.appendChild(otxt);
    div2.id = "move";
    div2.style.height = "20px";
    div2.style.background = "#ffffff";
    div1.appendChild(div2);
    obody.appendChild(div1);
    return div1;
}

// 窗口改变的时候改变弹出框的位置，保持一致居中
let resizeDiv = (div1, width, height) => {
    let maxWidth = window.innerWidth;
    let maxHeight = window.innerHeight;
    div1.style.top = (maxHeight - height)/2 + "px";
    div1.style.left = (maxWidth - width)/2 + "px";
}

// 设置遮罩
let mask = (obody) => {
    let div1 = document.createElement("div");
    div1.id = "mask"
    div1.style.width = "100%";
    div1.style.height = "100%";
    div1.style.position = "fixed";
    div1.style.background = `rgba(1,1,1,0.5)`;
    div1.style.top = 0;
    obody.appendChild(div1);
}

// 设置是否可拖动
let moveDiv = (e, odiv) => {
    console.log(e);
    let diffX = e.clientX - odiv.offsetLeft;
    let diffY = e.clientY - odiv.offsetTop;
    document.onmousemove = function (e) {
    // console.log(moveX, moveY);
        let moveX = e.clientX - diffX;
        let moveY = e.clientY - diffY;
        if(moveX < 0){
            moveX = 0;
        }else if(moveX > window.innerWidth - odiv.offsetWidth){
            moveX = window.innerWidth - odiv.offsetWidth;
        }
        if(moveY < 0){
            moveY = 0;
        }else if(moveY > window.innerHeight - odiv.offsetHeight) {
            moveY = window.innerHeight - odiv.offsetHeight;
        }
        odiv.style.top = moveY + "px";
        odiv.style.left = moveX + "px";
    }
    document.onmouseup = function (){
        document.onmousemove = null;
        document.onmouseup = null;
    }
}

// 设置弹窗的类型
let typeDiv = (type, odiv, message) => {
    let div3 = document.createElement("div");
    let otxt = document.createTextNode(message);
    div3.style.height = "calc(50% - 10px)";
    div3.style.backgroundColor = "#ffffff";
    div3.style.lineHeight = (odiv.offsetHeight - 20) / 2 + "px";
    div3.appendChild(otxt);
    odiv.appendChild(div3);
    let div4 = document.createElement("div");
    // div4.style.backgroundColor = "green";
    div4.style.height = (odiv.offsetHeight - 60) / 2 + "px";
    div4.style.lineHeight = (odiv.offsetHeight - 60) / 2 + "px";
    div4.style.textAlign = "center";
    // div4.style.display = "flex";
    odiv.appendChild(div4);
    if(type === "alert"){
        let but = document.createElement("input");
        but.id = "alertBut";
        but.type = "button";
        but.value = "确认";
        but.style.height = "25px";
        but.style.width = "50px"
        but.addEventListener("click", function(){
            closePop();
        })
        div4.appendChild(but);
    }else{
       
        if(type === "confirm"){
            let but = document.createElement("input");
            but.id = "popBut"
            but.type = "button";
            but.value = "确认";
            but.style.height = "25px";
            but.style.width = "50px"
            but.style.marginRight = odiv.offsetWidth / 5 + "px";
            div4.appendChild(but);
            but.addEventListener("click", function(){
                closePop();
                deleteActive = true;
            })
            let but1 = document.createElement("input");
            but1.type = "button";
            but1.value = "取消";
            but1.id = "popBut1"
            but1.style.height = "25px";
            but1.style.width = "50px"
            // div4.appendChild(but);
            div4.appendChild(but1);
            but1.addEventListener("click", function(){
                closePop();
                deleteActive = false;
            })
        }else if(type === "prompt"){
            // let ipt = document.createElement("input");
            // ipt.id = "popIpt";
            // div3.appendChild(ipt);
            let but = document.createElement("input");
            but.id = "popBut"
            but.type = "button";
            but.value = "确认";
            but.style.height = "25px";
            but.style.width = "50px"
            but.style.marginRight = odiv.offsetWidth / 5 + "px";
            div4.appendChild(but);
            but.addEventListener("click", function(){
                let oipt = document.querySelectorAll("#popUp input[type='text']");
                for(let i = 0; i < oipt.length; ++i){
                    if(i > 0){
                        dataArray1[i] = +oipt[i].value;
                    }else{
                        dataArray1[i] = oipt[i].value;
                    }
                }
                // console.log(dataArray1);
                if(isNaN(dataArray1[1] ) || isNaN(dataArray1[2])){
                    alert("年龄和工资要输入数字");
                }else{
                    if(dataArray1[0] === "" || dataArray1[1] === 0 || dataArray1[2] === 0){
                        alert("信息不完整或有误");
                    }else{
                        closePop();
                        deleteActive = true;
                    }
                }
            })
            let but1 = document.createElement("input");
            but1.type = "button";
            but1.value = "取消";
            but1.id = "popBut1"
            but1.style.height = "25px";
            but1.style.width = "50px"
            // div4.appendChild(but);
            div4.appendChild(but1);
            but1.addEventListener("click", function(){
                closePop();
                deleteActive = false;
            })
            div3.style.fontSize = "20px";
            div3.style.fontWeight = "normal";
            div3.innerHTML += `<pre style="margin:10 0 0 0">姓名：<input type = "text">\n年龄：<input type = "text">\n工资：<input type = "text"></pre>`;
            div3.style.lineHeight = (odiv.offsetHeight - 20) / 6 + "px";
        }
    }
}

// 关闭提示框
let closePop = ()=>{
    let obody = document.body
    let odiv = document.querySelector("#popUp")
    // odiv.style.display = "none";
    obody.removeChild(odiv);
    let omask = document.querySelector("#mask");
    if(omask){
        // omask.style.display = "none";
        obody.removeChild(omask);
    }
}
// initPop(150, 300, "black", "pink", "false", "true", "alert", "消息区：");
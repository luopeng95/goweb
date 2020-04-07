// 关闭提醒
function closeRemind(){
    let div = document.getElementById("remind");
    div.style.display = "none";
}

function bannerChange(){
    let ul = document.getElementById("banner_ul");
    let margin = document.defaultView.getComputedStyle(ul,null).marginLeft;//当前的marginLeft值
    let marginLeft = String(margin).split("").filter(margin => margin !== "-").join("");
    let bodyWidth = document.body.offsetWidth;
    switch(parseInt(marginLeft) / bodyWidth){
        // 也可以找到lable标签进行单击操作
        case 0:
            document.getElementById("sildeInput2").checked = true;
            break;
        case 1:
            document.getElementById("sildeInput3").checked = true;
            break;
        case 2:
            document.getElementById("sildeInput1").checked = true;
            break;
    }
    setTimeout("bannerChange()", 1000)

//     console.log(document.getElementById("sildeInput2").checked);
//     console.log(marginLeft);
//     console.log(typeof(margin));
//     console.log(document.body.offsetWidth);
}
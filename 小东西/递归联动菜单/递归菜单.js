let address = ["./provinces.json","./cities.json","./areas.json","./streets.json","./villages.json"];
// 封装一个函数，输入本地的json列表的名字，输出一个数组；
function getJson(addList) {
    let json = [];
    for (let i = 0; i < addList.length; ++i) {
        let ajax = new XMLHttpRequest();
        ajax.overrideMimeType("application/json");
        ajax.open("GET", addList[i], false);
        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4 && ajax.status == "200") {
                json.push(JSON.parse(ajax.responseText));
            }
        }
        ajax.send();
    }
    return json;
}
// 将得到的地区数据按照顺序放在json这个数组里面了
let json = getJson(address);

let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    // tag1.innerHtml = text;
    tag1.innerText = text;
    for (let i in attr) {
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}
let nameArr = ["provinceCode", "cityCode", "areaCode", "streetCode"];
class Select{
    constructor(dataId, parent){
        this.dataId = +dataId;
        this.parent = parent;
        this.init();
    }

    init(){
        this.clearHtml();
        // console.log(this.parent)
        // debugger;
        // this.parent.onchange = this.change.bind(this);
    }
    // "streetCode":"110101003","areaCode":"110101","cityCode":"1101","provinceCode":"11"
    clearHtml(){
        this.parent.innerHtml = "";
        appendEle(this.parent, "option", "---请选择---", {"data-value":"请选择"});
        if(this.dataId === 0){
            for(let i = 0; i < json[this.dataId].length; ++i){
                appendEle(this.parent, "option", json[this.dataId][i]["name"], {"data-value":json[this.dataId][i]["code"]});
            }
        }else{
            let lastSel = document.getElementsByClassName("sel")[+this.dataId - 1];
            // console.log(lastSel, this.dataId);
            let code = lastSel.selectedOptions[0].getAttribute("data-value");
            if(code !== "请选择"){
                console.log(code);
                for(let i = 0; i < json[this.dataId].length; ++i){
                    if(json[this.dataId][i][nameArr[this.dataId - 1]]  === code){
                        // console.log(json[this.dataId][i][nameArr[this.dataId - 1]]);
                        appendEle(this.parent, "option", json[this.dataId][i]["name"], {"data-value":json[this.dataId][i]["code"]});
                    }
                }
            }
        }
    }

    // change(){
    //     console.log("start")
    //     for(let i = this.dataId; i < json.length - 1; ++i){
    //         let parentNode = document.getElementsByClassName("sel")[i + 1];
    //         // parentNode.removeEventListener("change", parentNode.change.bind(parentNode));
    //         this.parent.onchange = null;
    //         parentNode.onchange = null;
    //         // console.log(parentNode.onchange)
    //         new Select(i + 1, parentNode);
    //     }
    // }
}

let change = (dataId) =>{
    console.log("start")
    for(let i = +dataId; i < json.length - 1; ++i){
        let parentNode = document.getElementsByClassName("sel")[i + 1];
        // parentNode.removeEventListener("change", parentNode.change.bind(parentNode));
        // this.parent.onchange = null;
        // parentNode.onchange = null;
        // console.log(parentNode.onchange)
        new Select(i + 1, parentNode);
    }
}
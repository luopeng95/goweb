
class LpAccordtion{
    constructor(parentName, json){
        this.parentName = parentName;
        this.json = json;
        this.init();
    }

    init(){
        this.createEle();
        this.getEle();
        this.addEle();
        this.setEle();
    }

    // 创建节点
    createEle(){
        let str = "";
        for(let i = 0; i < this.json.length; ++i){
            str += `<li class=lp-accordtion-li>${this.json[i]["name"]}</li>`;
            str += `<div class=lp-accordtion-div><ul>`;
            for(let j = 0; j < this.json[i]["context"].length; ++j){
                str += `<li>${this.json[i]["context"][j]}</li>`;
            }
            str += `</ul><div style='background-image:url(${this.json[i]["url"]})'></div></div>`;
        }
        this.parent = document.getElementsByClassName("lp-accordtion")[0];
        this.parent.innerHTML += str;
    }

    getEle(){
        this.accord = document.getElementsByClassName("lp-accordtion")[0];
        this.div = document.getElementsByClassName("lp-accordtion-div");
    }

    addEle(){
        this.accord.addEventListener("mouseover",(e)=>{
            if(e.target.nodeName === "LI"){
                // console.log(e.target.nodeName);
                for(let i = 0; i < this.div.length; ++i){
                    this.div[i].classList.remove("lp-accordtion-select");
                }
                e.target.nextSibling.classList.add("lp-accordtion-select");

            }
        })
    }

    setEle(){
        this.div[0].classList.add("lp-accordtion-select");
    }
}
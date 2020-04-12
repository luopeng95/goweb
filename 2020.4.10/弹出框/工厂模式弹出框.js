class Pop{
    constructor(height, width, borderColor, backgroundColor, havemask, dragable, type, message=""){
        this.height = height;
        this.width = width;
        this.borderColor = borderColor;
        this.backgroundColor = backgroundColor;
        this.havemask = havemask;
        this.dragable = dragable;
        this.type = type;
        this.message = message;
        this.obody;
        this.move;
        this.clear;
        this.pDiv;
        this.init();
    }

    init(){
        this.obody = document.body;
        let odiv = this.createDiv();
        window.addEventListener("resize",() =>{
            this.resizeDiv(odiv);
        });
        if(this.havemask === "true"){
            this.mask();
        }
        if(this.dragable === "true"){
            let omove = document.querySelector("#move");
            omove.addEventListener("mousedown", (event)=>{
                let e = event || window.event;
                // console.log(e);
                this.moveDiv(e, odiv);
            })
        }
        this.typeDiv(odiv);
    }

    createDiv(){
        let div1 = document.createElement("div");
        let maxWidth = window.innerWidth;
        let maxHeight = window.innerHeight;
        div1.id = "popUp"
        div1.style.width = this.width + "px";
        div1.style.height = this.height + "px";
        div1.style.background = `${this.backgroundColor}`;
        div1.style.position = "fixed";
        div1.style.top = (maxHeight - this.height) / 2 + "px";
        div1.style.left = (maxWidth - this.width) / 2 + "px";
        div1.style.border = `1px solid ${this.borderColor}`;
        div1.style.zIndex = 1000;
        let div2 = document.createElement("div");
        let otxt = document.createTextNode("可拖动DIV区域");
        div2.appendChild(otxt);
        div2.id = "move";
        div2.style.height = "20px";
        div2.style.background = "#ffffff";
        div1.appendChild(div2);
        this.obody.appendChild(div1);
        return div1;
    }

    resizeDiv(div1){
        // console.log(div1)
        let maxWidth = window.innerWidth;
        let maxHeight = window.innerHeight;
        div1.style.top = (maxHeight - this.height)/2 + "px";
        div1.style.left = (maxWidth - this.width)/2 + "px";
    }

    mask(){
        let div1 = document.createElement("div");
        div1.id = "mask"
        div1.style.width = "100%";
        div1.style.height = "100%";
        div1.style.position = "fixed";
        div1.style.background = `rgba(1,1,1,0.5)`;
        div1.style.top = 0;
        this.obody.appendChild(div1);
    }

    moveDiv(e, odiv){
        // let event = e;
        let diffX = e.clientX - odiv.offsetLeft;
        let diffY = e.clientY - odiv.offsetTop;
        this.move = (event) =>{
            let moveX = event.clientX - diffX;
            let moveY = event.clientY - diffY;
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
        document.addEventListener("mousemove", this.move);

        this.clear = () =>{
            document.removeEventListener("mousemove", this.move);
            document.removeEventListener("mouseup", this.clear);
        }
        document.addEventListener("mouseup", this.clear);

    }

    typeDiv(odiv){
        let div3 = document.createElement("div");
        let otxt = document.createTextNode(this.message);
        div3.style.height = "calc(50% - 10px)";
        div3.style.backgroundColor = "#ffffff";
        div3.style.lineHeight = (odiv.offsetHeight - 20) / 2 + "px";
        div3.appendChild(otxt);
        odiv.appendChild(div3);
        let div4 = document.createElement("div");
        div4.style.height = (odiv.offsetHeight - 60) / 2 + "px";
        div4.style.lineHeight = (odiv.offsetHeight - 60) / 2 + "px";
        div4.style.textAlign = "center";
        odiv.appendChild(div4);

        if(this.type === "alert"){
            new PopAlert(div4);
        }else if(this.type === "confirm"){
            new PopConfirm(div4, odiv);
        }else{
            new PopPrompt(div4, odiv);
        }
        div4.addEventListener("click", (e) => {
            if(e.target.type === "button"){
                this.closePop();
            }
        })
    }

    closePop(){
        let odiv = document.querySelector("#popUp")
        // odiv.style.display = "none";
        this.obody.removeChild(odiv);
        let omask = document.querySelector("#mask");
        if(omask){
            // omask.style.display = "none";
            this.obody.removeChild(omask);
        }
    }
}  

class PopAlert{
    constructor(div4){
        this.div4 = div4;
        return this.create();
    }

    create(){
        let but = document.createElement("input");
        but.id = "alertBut";
        but.type = "button";
        but.value = "确认";
        but.style.height = "25px";
        but.style.width = "50px"
        this.div4.appendChild(but);
        return but;
    }


}

class PopConfirm{
    constructor(div4, odiv){
        this.div4 = div4;
        this.odiv = odiv;
        this.create();
    }

    create(){
        let but = document.createElement("input");
            but.id = "popBut"
            but.type = "button";
            but.value = "确认";
            but.style.height = "25px";
            but.style.width = "50px"
            but.style.marginRight = this.odiv.offsetWidth / 5 + "px";
            this.div4.appendChild(but);

            let but1 = document.createElement("input");
            but1.type = "button";
            but1.value = "取消";
            but1.id = "popBut1"
            but1.style.height = "25px";
            but1.style.width = "50px"
            // div4.appendChild(but);
            this.div4.appendChild(but1);
    }
}

class PopPrompt{
    constructor(div4, odiv){
        this.div4 = div4;
        this.odiv = odiv;
        this.create();
    }

    create(){
        let ipt = document.createElement("input");
        ipt.style.display = "block";
        ipt.setAttribute("placeHolder", "输入文本的地方");
        this.div4.appendChild(ipt);

        let but = document.createElement("input");
        but.id = "popBut"
        but.type = "button";
        but.value = "确认";
        but.style.height = "25px";
        but.style.width = "50px"
        but.style.marginRight = this.odiv.offsetWidth / 5 + "px";
        this.div4.appendChild(but);

        let but1 = document.createElement("input");
        but1.type = "button";
        but1.value = "取消";
        but1.id = "popBut1"
        but1.style.height = "25px";
        but1.style.width = "50px"
        // div4.appendChild(but);
        this.div4.appendChild(but1);
    }
}
class LpSuprise {
    constructor() {
        this.flag = false;
        this.init();
    }

    init() {
        this.createEle();
        this.getEle();
        this.setInter1();
        this.addEvent();
    }

    createEle() {
        let str = "";
        str += `<div class=lp-suprise-d1 id=flag>点击有惊喜</div><div class=lp-suprise-d2></div><div class=lp-suprise-d3></div><div class=lp-suprise-d4></div>`;

        this.parent = document.getElementsByClassName("lp-suprise")[0];
        this.parent.innerHTML += str;
    }

    getEle() {

    }

    addEvent() {
        window.addEventListener("click", (e) => {
            this.flag = !this.flag;
            if (e.target.id === "flag") {
                if (this.flag) {
                    console.log(this.flag);

                    this.setInter2();
                } else {
                    clearInterval(this.timer2);
                    this.d3 = document.getElementsByClassName("lp-suprise-d3")[0];
                    this.d3.classList.remove("lp-suprise-d3-change");
                    this.d4 = document.getElementsByClassName("lp-suprise-d4")[0];
                    this.d4.classList.remove("lp-suprise-d4-change");
                }
            }
        })


        // 浏览器丢失焦点事件
        window.addEventListener("visibilitychange", () => {
            if (document["hidden"]) {
                // console.log("丢失焦点")
                clearInterval(this.timer1);
                clearInterval(this.timer2);
                this.d3 = document.getElementsByClassName("lp-suprise-d3")[0];
                this.d3.classList.remove("lp-suprise-d3-change");
                this.d4 = document.getElementsByClassName("lp-suprise-d4")[0];
                this.d4.classList.remove("lp-suprise-d4-change");

            } else {
                // console.log("获得焦点")
                this.setInter1();
                if (this.flag) {
                    this.setInter2();
                }

            }
        })
    }
    setInter1() {
        this.timer1 = setInterval(() => {
            let x = parseInt(Math.random() * 256);
            let y = parseInt(Math.random() * 256);
            let z = parseInt(Math.random() * 256);
            this.d1 = document.getElementsByClassName("lp-suprise-d1")[0];
            this.d1.classList.toggle("lp-suprise-d1-change");
            this.d1.style.backgroundColor = `rgb(${x},${y},${z})`
            this.d2 = document.getElementsByClassName("lp-suprise-d2")[0];
            this.d2.classList.toggle("lp-suprise-d2-change");
            this.d2.style.borderColor = `rgb(${x},${y},${z})`
        }, 500)
    }


    setInter2() {
        this.timer2 = setInterval(() => {
            let x = parseInt(Math.random() * 256);
            let y = parseInt(Math.random() * 256);
            let z = parseInt(Math.random() * 256);
            this.d3 = document.getElementsByClassName("lp-suprise-d3")[0];
            this.d3.classList.toggle("lp-suprise-d3-change");
            this.d3.style.backgroundColor = `rgb(${x},${y},${z})`;
            this.d4 = document.getElementsByClassName("lp-suprise-d4")[0];
            this.d4.classList.toggle("lp-suprise-d4-change");
            this.d4.style.backgroundColor = `rgb(${x},${y},${z})`;
        }, 500)
    }
}
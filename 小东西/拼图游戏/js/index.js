    class Puzz{
        constructor(leave, imgUrl, parent){
            this.leave = +leave;         //定义难度属性
            this.step = 0;              //初始步数
            this.userTime = 0;          //初始时间
            this.timer1;                 //计时的定时器
            this.blank = +leave; //定义初始的空白位置（4*4  5*5）
            this.imgUrl = imgUrl;
            this.parent = parent;
            this.sqret = Math.sqrt(this.leave + 1)


            this.init();
        }

        // 初始化函数
        init(){
            $("#step").html("0")
            this.timer();
            this.createGrid();
            this.differentOrder();
            this.clickLi();
        }

        // 计时函数
        timer(){
            this.timer1 = setInterval(() => {
                $("#timer").eq(0).html(`${parseInt((this.userTime / 60) % 60)}:${parseInt((this.userTime / 10) % 6)}${parseInt((this.userTime / 1) % 10)}`);
                this.userTime += 1;
            }, 1000);
        }

        // 初始化页面图片,并将最后一张图片隐藏
        createGrid(){
            let str = ``;
            for(let i = 0; i <= this.leave; ++i){
                str += `<li class = 'puzzLi' style = 'background-image:url(${this.imgUrl});width:${500/this.sqret}px;height:${500/this.sqret}px;top:${parseInt(i/this.sqret)*500/this.sqret}px;left:${parseInt(i%this.sqret)*500/this.sqret}px;background-position:${-parseInt(i%this.sqret)*500/this.sqret}px ${-parseInt(i/this.sqret)*500/this.sqret}px' data-id='${i}' data-class='${i}'></li>`
            }
            this.parent.html(str);
            $(`[data-id=${this.leave}]`).css("display", "none")
        }

        // 打乱图片的顺序
        differentOrder(){
            // 拿到空白周围的一个li,将空白格与选中的li进行交换
            // 要准确的交换必须定义一个属性来记录li当前的位置--data-class
            // 打乱50次
            for(let i = 0; i < this.leave * 3; ++i){
                // console.log(`第${i}次`);
                let num = this.puzzNum();
                let oLi = this.returnLi(num);
                // console.log(oLi);
                oLi.attr("data-class", this.blank);
                oLi.css({"top":`${parseInt(this.blank/this.sqret)*500/this.sqret}px`, "left":`${this.blank%this.sqret*500/this.sqret}px`});
                this.blank = num;
                // console.log(this.blank);
            }
        }


        // 随机获取空白位置周围的图块的一个编号
        puzzNum(){
            let arr = [];
            // 空白周围最好的情况是有四个邻居，但是因为有其它的情况，所以分别判断
            // 除最后一列都可以编号+1
            if(this.blank % this.sqret !== this.sqret - 1){
                arr.push(this.blank + 1);
            }
            // 除了第一列都可以减一
            if(this.blank % this.sqret !== 0){
                arr.push(this.blank - 1);
            }
            // 除了第一行都可以向上减一
            if(this.blank >= this.sqret){
                arr.push(this.blank - this.sqret);
            }
            // 除了最后一行都可以向下加一
            if(this.blank < this.sqret ** 2 - this.sqret){
                arr.push(this.blank + this.sqret);
            }
            let m = Math.floor(Math.random() * arr.length);
            return arr[m];
        }

        // 返回被选中的li，匹配data-class的方式
        returnLi(num){
            for(let i = 0; i < this.leave; ++i){
                if(+$("#main>li").eq(i).attr("data-class")  === num){
                    return $("#main>li").eq(i);
                }
            }
        }

        // li的点击事件
        clickLi(){
            this.parent.on("click", "li", (e) => {
                console.log(this.blank);
                let oLi = $(`[data-class=${e.target.getAttribute("data-class")}]`).eq(0);
                let abs = Math.abs(+oLi.attr("data-class") - this.blank);
                let max = +oLi.attr("data-class") > this.blank ? +oLi.attr("data-class") : this.blank;
                if(abs === this.sqret){
                    oLi.css("top", `${parseInt(this.blank/this.sqret) * 500/this.sqret}px`);
                    
                }else if(abs === 1 && max % this.sqret != 0){
                    oLi.css("left", `${(this.blank%this.sqret)*500/this.sqret}px`)
                    
                }else{
                    return null;
                }
                // console.log(new Rule().check());
                let index = +oLi.attr("data-class");
                oLi.attr("data-class", this.blank);
                this.blank = index;
                ++this.step;
                if(new Rule().check()){
                    let ans = confirm("恭喜已经完成拼图, 是否再来一次");
                    $("#main>li").eq(this.blank).css("display", "block");
                    if(ans){
                        location.reload();
                    }
                }
                $("#step").html(`${this.step}`)
            })
        }

        // 清除定时器，清空步数，去除点击事件
        clearTimer(){
            clearInterval(this.timer1);
            $("#step").html("0");
            $("#main").off("click", "li");
        }

    }


    class Rule{
        constructor(){
            
        }

        // 判断此时是否已经完成拼图
        check(){
            let oLis = $("#main>li")
            for(let i = 0; i < oLis.length; ++i){
                // console.log(oLis.eq(i).attr("data-id"), oLis.eq(i).attr("data-class"))
                if(oLis.eq(i).attr("data-id") != oLis.eq(i).attr("data-class")){
                    return false;
                }
            }
            return true
        }
    }
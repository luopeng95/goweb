// 随机产生区间数字
function rand(m, n) {
    let num;
    if (m > n) {
        num = Number.parseInt(Math.random() * (m - n) + n);
    } else {
        num = Number.parseInt(Math.random() * (n - m) + m);
    }
    return num;
}

// 在父节点插入指定的节点和属性
let appendEle = (parent, tag, text, attr) => {
    let tag1 = document.createElement(`${tag}`);
    tag.innerHtml = text;
    for(let i in attr){
        tag1.setAttribute(i, attr[i]);
    }
    parent.appendChild(tag1);
    return tag1;
}

let total = 30;
let floors = 3;

/**
 * {parent : DOM} : 生成div的父节点
 * {plate : string} : 车牌号
 * {overTime : Number} : 进入时间，表示在多久之后会进入停车场
 * {outTime : Number} : 离开时间，在多久之后会离开
 * {park : Object} : 停车场实例
 */
class Car{
    constructor(parent, plate, overTime, outTime, park){
        this.parent = parent;
        this.plate = plate;
        this.overTime = overTime;
        this.outTime = outTime;
        this.car;
        this.park = park;
        this.joinC;
        this.init();
        return this.car;
    }

    init(){
        let joinC = this.overCar();
    }

    overCar(){
        setTimeout(() => {
            this.createCar();
            this.joinC =  new joinCamrea(this.park, this.plate);
            if(this.joinC.isStop){
                this.moveCar();
                new leaveCamrea(this.parent, this.car, this.joinC, this.plate, this.overTime, this.outTime, this.park, this.joinC.date);
            }else{
                this.parent.removeChild(this.car); 
            }
        }, this.overTime);
    }

    moveCar(){
        let xCount = 0;
        let yCount = 0; 
        // if(this.joinC.level === 0){
            
        // }else if(this.joinC.level === 1){
        //     this.car.style.top = "60px";
        // }else{
        //     this.car.style.top = "110px";
        // }
        // console.log(this.car.offsetLeft);
        let time = setInterval(() => {
            if(xCount < 10){
                this.car.style.left = this.car.offsetLeft + (this.joinC.num * 20 + 20)/10 + "px";
            }else{
                // console.log(this.car.offsetLeft);
                if(xCount === 20){
                    clearInterval(time)
                    return null;
                }
                this.car.style.top =  this.car.offsetTop + (this.joinC.level * 50 + 30)/10 + "px";
            }
            ++xCount;
        }, 60);
    }

    createCar(){
        this.car= appendEle(this.parent, "div", "", {});
        this.car.classList.add("car");
        this.car.style.top = 0 + "px";
        this.car.style.left = 0 + "px";
    }
}

// 停车场对象
class Park{
    constructor(){
        this.floors = floors;
        this.arrFloors = [];
        this.createFloor();
    };

    createFloor(){
        for(let i = 0; i < this.floors; ++i){
            this.arrFloors.push(new Floor(i));
        }
    }
}

// 楼层对象
class Floor{
    constructor(level){
        this.level = level
        this.total = total;
        this.user = total;
        this.arrUser = []
        this.createStall();
        return this;
    }

    createStall(){
        for(let i = 0; i < this.total; ++i){
            this.arrUser.push(new Stall(i));
        }
    }
}

// 停车位对象
class Stall{
    constructor(num){
        this.num = num;
        this.haveCar = false;
        return this;
    }
}

// 入口摄像头
class joinCamrea{
    constructor(park, plate){
        this.park = park;
        this.level;
        this.num;
        // 定义一个属性用来存储进入前可用的车位数
        this.nums = 0;
        this.plate = plate;
        // 是否停到了车
        this.isStop;
        this.getUserStall();
        this.date;
        return this;
    }

    // 得到还有多少可用的停车位
    getUserStall(){
        // 显示现在还有多少个车位
        this.park.arrFloors.map((ele) => {
            this.nums += ele.user;
        })
        // 如果没有停车位了就提示不能停车
        if(this.nums === 0){
            console.log(`没有停车位了，不能停车`);
            this.isStop = false;
        }else{
            console.log(`现在还有${this.nums}个车位`);
            this.isStop = true;
            this.parkStall();
        }
    }

    // 停车的地方
    parkStall(){
        this.level = rand(0, floors);
        this.num = rand(0, total);
        if (!this.park.arrFloors[this.level].arrUser[this.num].haveCar) {
            this.park.arrFloors[this.level].arrUser[this.num].haveCar = true;
            this.park.arrFloors[this.level].user -= 1;
        }else{
            return this.parkStall();
        }
        this.date = new Date;
        console.log(this.date + `${this.plate}进入停车场,停在${this.level}层${this.num}号`);
    }
}

// 出口摄像头
class leaveCamrea{
    constructor(parent, car, joinC, plate, overTime, outTime, park, date){
        this.parent = parent;
        this.plate = plate;
        this.overTime = overTime;
        this.outTime = outTime;
        this.car = car;
        this.joinC = joinC;
        this.park = park;
        this.date = date;
        this.carLeave();
    }

    // 车子离开
    carLeave(){
        setTimeout(() => {
            let moveL = 620 - this.car.offsetLeft - 20;
            let moveT = 200 - this.car.offsetTop - 20;
            let xCount = 0;
            let time = setInterval(() => {
                if(xCount < 10){
                    this.car.style.left = this.car.offsetLeft + moveL/10 + "px";
                }else{
                    if(xCount === 20){
                        this.parent.removeChild(this.car);
                        this.park.arrFloors[this.joinC.level].arrUser[this.joinC.num].haveCar = false;
                        this.park.arrFloors[this.joinC.level].user += 1;
                        let dat = new Date();
                        console.log(`${this.plate}离开停车场,停车时间${ (dat.getTime()- this.date.getTime())/1000}秒`);
                        clearInterval(time)
                    }
                    this.car.style.top =  this.car.offsetTop + moveT/10 + "px";
                }
                ++xCount;
            }, 60);
        }, this.outTime - this.overTime);
    }
}
var map = new BMap.Map("myMap");
map.centerAndZoom(new BMap.Point(114.0595, 22.5428), 13);
map.enableScrollWheelZoom(true);
let oBut = document.getElementById("but");
let oStart = document.getElementById("start");
let oEnd = document.getElementById("end");
let oWay = document.getElementById("way")
class Load {
    constructor(startPlace, endPlace, way) {
        this.startPlace = startPlace;
        this.endPlace = endPlace;
        this.way = way;
        this.init();
    }

    init() {
        if(this.way === "步行"){
            this.walking()
        }else if(this.way === "驾车"){
            this.driveCar();
        }else{
            this.bus();
        }
        this.Load();
    }

    // 步行
    walking() {
        this.load = new BMap.WalkingRoute(map, { renderOptions: { map: map, autoViewport: true, panel: "r-result"} });
    }
    
    // 开车
    driveCar(){
        this.load = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
    }

    // 公交
    bus(){
        this.load = new BMap.TransitRoute(map, {
            renderOptions: {map: map, panel: "r-result"}
        });
    }

    // 开始搜索
    Load(){
        this.load.search(this.startPlace, this.endPlace);
    }
}

oBut.addEventListener("click",()=>{
    new Load(oStart.value, oEnd.value, oWay.value)
})
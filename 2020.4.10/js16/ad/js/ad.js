class adFactory {
  //每次new adFactory 就总会产生一个广告
  //这条广告需要根据type来分配
  constructor(ele, arr) {
    // this.context = context
    //根据传入的type来确定 该广告需要调用哪个类
    arr.map(e => {
      switch (e.type) {
        case "JavaScript":
          //这个工厂会给你生产一个js广告
          //可以不要new了
          new JavaScript(ele, e.context)
          break;
        case "UI":
          new UI(ele, e.context)
          break;
        case "JAVA":
          new JAVA(ele, e.context)
          break;
      }
    })
  }
}
class JavaScript {
  constructor(ele, context) {
    this.init(ele, context)
  }
  init(ele, context) {
    let newDiv = document.createElement("div")
    newDiv.style.backgroundColor = "skyblue"
    newDiv.innerText = context;
    ele.appendChild(newDiv)
  }
}
class UI {
  constructor(ele, context) {
    this.init(ele, context)
  }
  init(ele, context) {
    let newDiv = document.createElement("div")
    newDiv.style.backgroundColor = "pink"
    newDiv.style.color = "brown"
    newDiv.innerText = context;
    ele.appendChild(newDiv)
  }
}
class JAVA {
  constructor(ele, context) {
    this.init(ele, context)
  }
  init(ele, context) {
    let newDiv = document.createElement("div")
    newDiv.style.backgroundColor = "green"
    newDiv.style.color = "yellow"
    newDiv.innerText = context;
    ele.appendChild(newDiv)
  }
}
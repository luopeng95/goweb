// 小张写的 独立的作用域 他永远不会和其他开发者的变量起冲突
(function () {
  //创建一个Chart工厂 同时传入所有的静态属性 那么该模块 静态属性就都在这里了
  var Chart = function (arg1, arg2, arg3) {
    this.arg1 = arg1
    this.arg2 = arg2
    this.arg3 = arg3
    //如果需要初始化方法的时候 那么我们需要init()
    // this.init()
    //有的时候我们初始化之后 需要获取到其中的内容
    // return new this.init()
  }

  //利用原型,提供动态的方法
  Chart.prototype = {
    constructor: Chart,
    init: function () {},
    add: function () {},
    remove: function () {},
    query: function () {}
  }

  //将整个工厂暴露给window作用域
  window.Chart = Chart

}())
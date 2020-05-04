let show = () => {
  return "我是一个函数"
}

Function.prototype.toString = function () {
  console.log("toString被调用")
}

Function.prototype.valueOf = function () {
  console.log("valueOf被调用")
}
// console.log(show())
console.log("beijing" + "上海")
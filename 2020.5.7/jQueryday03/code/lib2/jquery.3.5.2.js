//立即执行函数 目的是为了形成闭包 形成一个私有作用域 变量就不会被污染
//插件或者框架
//为了传入一个window对象,他俩是共享这个作用域的 所以window也是同一个对象 传入window 待会再window的时候距离更近 方便调用 效率更高
// undefined 兼容低版本的IE浏览器 小BUG
(function (window, undefined) {
  //相当于 声明一个jQuery工厂 回头我们可以使用这个工厂
  let jQuery = function (seletor) {
    //业务代码
    //seletor "div"
    //seletor "#box"
    //类数组对象 => 真数组
    let nodeList = document.querySelectorAll(seletor);
    //将类数组对象 强制转换成真数组对象
    return {
      arr: Array.from(nodeList),
      length: Array.from(nodeList).length
    }
  }

  //将jQuery这个工厂暴露给window对象
  //同时又将这个值 赋值给window.$ 所以window$ 就是window.jQuery还是仅仅只暴露一个变量.那么当我们想使用这个插件的时候 我们直接 在外面 jQuery或者$ 就可以了
  window.$ = window.jQuery = jQuery
}(window))
//立即执行函数 目的是为了形成闭包 形成一个私有作用域 变量就不会被污染
//插件或者框架
//传入一个window对象,他俩是共享这个作用域的 所以window也是同一个对象 传入window 待会再window的时候距离更近 方便调用 效率更高
// undefined 兼容低版本的IE8浏览器 小BUG
(function (window, undefined) {
  //相当于 声明一个jQuery工厂 回头我们可以使用这个工厂
  let jQuery = function (seletor) {
    //jQuery.fn.init的构造函数 构造出来的实例
    //jQuery.prototype.init.prototype 的构造函数 构造出来的实例
    //css 这个方法 又属于 jQuery.prototype
    //因为我总是要选择若干个标签 那我干脆直接将这个原型注入到init函数对象中
    //因为我这里写了一个new 所以这个对象的原型是init 变相他的原型就是jQuery 也是jQuery.fn
    return new jQuery.fn.init(seletor)
  }

  //原型链
  //将现在的原型链又赋值给jQuery.fn这个对象
  //jQuery.fn === jQuery.prototype
  jQuery.fn = jQuery.prototype = { //工厂函数的原型
    //重写这个对象的构造器 因为的他的内存地址 已经被你覆盖了
    constructor: jQuery,
    init: function (seletor) { // seletor (用户写的选择器 => jQuery工厂 => jQuery.fn.init中) 你传入的参数
      //业务代码
      // seletor "div"
      // seletor "#box"
      //类数组对象 => 真数组
      // let nodeList = document.querySelectorAll(seletor);
      //数组的壳
      // let arr = Array.from(nodeList);
      // arr.__proto__ = jQuery.prototype; //可以用css方法
      // //返回了arr数组
      // return arr

      //这次jQuery对象 查询到的所有元素
      // init 在这里充当的是一个崭新的构造器
      // 此时正在构建一个init类型的对象 该对象 有一个属性叫arr 还有一个属性叫length
      // init类型的对象 所以他的原型 init.prototype 也是具备的 变相他的原型就是jQuery.fn 或者 jQuery.prototype
      this.arr = Array.from(document.querySelectorAll(seletor));
      //这次查询到的数组的长度
      this.length = this.arr.length;
    },
    css: function (name, styles) {
      if (arguments.length === 1) {
        let typeName = Object.prototype.toString.call(name);
        //如果是getter 直接返回值 给用户看到
        //如果是setter 由于我们要做链式调用 所以仍然要返回本实例 方便我下一次调用
        switch (typeName) {
          case "[object String]":
            //参数个数为1 且是字符串 查询功能
            return window.getComputedStyle(this.arr[0])[name]
          case "[object Object]":
            //隐式迭代 因为jQuery总是将一个组合的内容 全部做重复的工作 相当于帮用户解决的要写for循环的痛点
            //遍历三个div
            this.arr.map(e => {
              //遍历每个属性名值对
              for (let [key, value] of Object.entries(name)) {
                e.style[key] = value
              }
            })
        }
      } else if (arguments.length === 2) {
        //参数个数为2 都是字符串
        this.arr.map(e => {
          e.style[name] = styles;
        })
      }
      //返回这个实例
      return this // 支持链式编程
    }
  }
  // init.prototype = jQuery.fn;
  // 修改init原型对象的指向 让init函数也持有jQuery的原型对象 换言之 就是init和jQuery是同一个构造工厂 jQuery是一个假皇帝 init是真太后
  //jQuery.prototype <=> jQuery.fn
  jQuery.fn.init.prototype = jQuery.fn
  //将jQuery这个工厂暴露给window对象
  //同时又将这个值 赋值给window.$ 所以window$ 就是window.jQuery还是仅仅只暴露一个变量.那么当我们想使用这个插件的时候 我们直接 在外面 jQuery或者$ 就可以了
  window.$ = window.jQuery = jQuery
}(window))
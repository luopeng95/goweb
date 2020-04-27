let _random = (min, max, digits) => {
  let num;
  //仅有一个参数的时候 0-min
  if (!max) {
    num = Math.random() * min
  } else {
    //min,max
    num = Math.random() * (max - min) + min
  }
  if (digits === "undefined" || digits === 0) {
    num = Math.floor(num)
  } else {
    num = Number(num.toFixed(digits))
  }
  return num
}

/**
 * 
 * @param {HTMLElment} parent 父元素 
 * @param {String} eleName 待添加标签的名字 
 * @param {String} value 标签中的内容 
 * @param {Object} attr 这个子标签的属性对象 
 */
let _append = (parent, eleName, value = "", attr) => {
  if (Object.prototype.toString.call(parent) === "[object String]") {
    parent = document.getElementById(parent)
  }
  //1 生产一个li标签
  let newEle = document.createElement(eleName)
  for (let key in attr) {
    newEle.setAttribute(key, attr[key])
  }
  //2. 生产一个文本节点
  // let newTxt = document.createTextNode(value);
  newEle.innerHTML = value
  //3. 拼接
  parent.appendChild(newEle)
  // newEle.appendChild(newTxt)
  return newEle
}

/**
 * 该函数用于优化时间显示代码 当数字小于10的时候 应该在前面添加一个"0"
 * @param {Number} num 传入一个待添加0的数字
 * @return {String} 返回一个被优化的数字字符串 
 */
let _formatDate = (num) => {
  if (num < 10) {
    return "0" + num
  } else {
    return num + ""
  }
}

let _localDate = (match, p1, p2, p3) =>
  `${p1}年${p2 = (p2.length === 2) ? p2 : "0" + p2}月${p3 = (p3.length === 2) ? p3 : "0" + p3}日`


let _extend = (target, object) => {
  //复制target 长得的target
  let newObj = {}
  for (let key in target) {
    newObj[key] = target[key]
  }
  for (let key in object) {
    newObj[key] = object[key]
  }
  //返回这个新修改的对象
  return newObj
}

let _debounce = () => {

}
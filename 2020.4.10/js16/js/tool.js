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
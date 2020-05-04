/**
 * 根据data在table中创建一个表格
 * @param {String,Element} table table的id
 * @param {Array} data json数据
 * @param {Object} options 配置
 */
let createTable = (table, data, options) => {
  //动态判断用户传入的参数是字符串还是一个元素
  let eTable;
  if (typeof table === "string") {
    eTable = document.querySelector(`#${table}`)
  } else {
    eTable = table
  }
  createTableHeader(eTable, options)
  //对json数据进行遍历 每次得到的是一个对象
  data.forEach(e => {
    createTableRow(eTable, e, options)
  })
}

/**
 * 创建一个表头
 */
let createTableHeader = (parent, options) => {
  let tableHeader = appendEle(parent, "li", "", {
    "class": "table-row table-title"
  })
  if (options.selectable) {
    appendEle(tableHeader, "div", '<input type="checkbox" id="allSelect"></input>')
  }
  appendEle(tableHeader, "div", "姓名")
  appendEle(tableHeader, "div", "工资")
  appendEle(tableHeader, "div", "年龄")
  if (options.operation) {
    appendEle(tableHeader, "div", "操作")
  }
}

/**
 * 创建除了表头的其他行,传入的json有多少个对象,那就有多少行
 * @param {Object} data 
 */
let createTableRow = (parent, data, options) => {
  let newEle = appendEle(parent, "li", "", {
    "class": "table-row"
  })
  newEle.addEventListener("click", e => {
    switch (e.target.getAttribute("method")) {
      case "delete":
        //删除代码
        deteleEle(parent, newEle)
        break;
      case "change":
        console.log("修改")
        break;
      default:
        console.log("无事发生")
        break;
    }
  })
  createTableCell(data, newEle, options)
}

/**
 * 根据这个对象创建若干个单元格
 * @param {Object} obj 数据对象
 * @param {HTMLElement} parent 这一些单元格的父元素
 */
let createTableCell = (obj, parent, options) => {
  if (options.selectable) {
    //生成装checkbox的那个div
    let checkDiv = appendEle(parent, "div")
    //在这个装checkbox的div中再创建一个子元素 input
    appendEle(checkDiv, "input", "", {
      "type": "checkbox"
    })
  }
  for (let key in obj) {
    appendEle(parent, "div", obj[key])
  }
  if (options.operation) {
    //生成装两个按钮的div
    let btnDiv = appendEle(parent, "div")
    appendEle(btnDiv, "input", "", {
      "type": "button",
      "value": "修改",
      "method": "change"
    })
    appendEle(btnDiv, "input", "", {
      "type": "button",
      "value": "删除",
      "method": "delete"
    })
  }
}

/**
 * 
 * @param {HTMLElment} parent 父元素 
 * @param {String} eleName 待添加标签的名字 
 * @param {String} value 标签中的内容 
 * @param {Object} attr 这个子标签的属性对象 
 */
let appendEle = (parent, eleName, value = "", attr) => {
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
 * 该方法用于删除某个节点
 * @param {Element} parent 
 * @param {Element} ele 
 */
let deteleEle = (parent, ele) => {
  parent.removeChild(ele)
}
class Tab {
  constructor(parent, data) {
    this.parent = parent;
    this.title = "tab_title"
    this.content = "tab_content"
    this.data = data
    this.init()
  }
  //初始化一个选项卡
  init() {
    let oParent = document.querySelector(`#${this.parent}`);
    oParent.innerHTML =
      `<ul class="${this.title}" id="${this.title}"></ul><ul class="${this.content}" id="${this.content}"></ul>`
    let titleUl = this.initTitle()
    this.titleClick(titleUl)
    this.initContent()
  }

  initTitle() {
    let oTitle = document.querySelector(`#${this.title}`)
    this.data.map((e, i) => {
      //做一个自定义属性
      if (i !== 0) {
        oTitle.innerHTML += `<li title="${e.title}" index="${i}">${e.title}</li>`
      } else {
        oTitle.innerHTML += `<li title="${e.title}" class="${Tab.TITLE_ACTIVE}" index="${i}">${e.title}</li>`
      }
    })
    let aTitle = oTitle.getElementsByTagName("li");
    console.log(oTitle.offsetWidth)
    for (let i = 0; i < aTitle.length; i++) {
      aTitle[i].style.width = (oTitle.offsetWidth - 50) / aTitle.length + "px";
    }
    aTitle[0].style.width = aTitle[0].offsetWidth + 50 + "px"
    return oTitle
  }
  //为title的ul绑定一个点击事件
  titleClick(ul) {
    ul.addEventListener("click", (e) => {
      this.reset(this.parent)
      this.change(e.target)
    })
  }

  //洗掉所有的样式
  reset() {
    let aTitle = document.querySelectorAll(`#${this.title} li`)
    let aContent = document.querySelectorAll(`#${this.content} li`)
    for (let i = 0; i < aTitle.length; i++) {
      aTitle[i].className = ""
      aContent[i].className = ""
    }
  }
  //修改对应的li的样式
  change(li) {
    if (li.nodeName === "LI") {
      let oTitle = document.querySelector(`#${this.title}`)
      let aTitle = document.querySelectorAll(`#${this.title} li`)
      let aContent = document.querySelectorAll(`#${this.content} li`)
      aTitle[li.getAttribute("index")].className = "clicked"
      aContent[li.getAttribute("index")].className = "active"
      for (let i = 0; i < aTitle.length; i++) {
        aTitle[i].style.width = (oTitle.offsetWidth - 50) / aTitle.length + "px";
      }
      aTitle[li.getAttribute("index")].style.width = aTitle[li.getAttribute("index")].offsetWidth + 50 + "px"
    }
  }

  initContent() {
    let oContent = document.querySelector(`#${this.content}`)
    this.data.map((e, i) => {
      if (i !== 0) {
        oContent.innerHTML += `<li>${e.content}</li>`
      } else {
        oContent.innerHTML += `<li class=${Tab.CONTENT_ACTIVE}>${e.content}</li>`
      }
    })
  }
}

Tab.TITLE_ACTIVE = "clicked"
Tab.CONTENT_ACTIVE = "active"
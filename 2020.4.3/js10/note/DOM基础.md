### Window

"天大地大" window 最大

- window.onload
- window.document
- window.document.documentElement
- window.document.head
- window.document.body

### Node 抽象类

- childNodes
- nodeType
- nodeName
- nodeValue

## Element\*\*

- 增
  - 创造节点
  - 拼接元素
- 删
- 改
- 查
- 属性操作

## this\*\*

谁调用就指向谁

- 普通函数中 -> window
- 全局作用域 -> window
- 定时器 -> window
- 事件函数中 -> 触发器/调用者
- 箭头函数 -> 父作用域
- 对象/数组 -> 对象/数组

### 总结

谁调用就指向谁 -> 谁.函数() 就指向那个谁/ 函数() -> window.函数()

事件中 this 指向都是指向调用者

对象中 this 指向都是指向对象

箭头函数 没有 this 指向 它的指向继承自父作用域的指向

其他情况通通都是指向 window 的

### call/apply/bind

可以改变 this 指向

### 事件

1. 事件分类: 普通事件/绑定事件
普通事件：只能绑定一个，会被覆盖，不能取消
绑定事件：ele.addEventListenter（“事件”，函数），可以绑定多个事件并且可以使用ele.removeEventListener（"事件"，函数名）取消，用remove取消的时候，绑定时使用的函数必须是外部函数不能是在内部声明的函数。
2. 事件流
事件流：不同的且带有嵌套关系的标签的同种事件，对个事件穿成串，且传播关系一致，就称这些事件形成了文档流
3. 事件冒泡&事件捕获
事件冒泡：在右包含关系的标签结构里，从下往上进行触发事件的依次触发，直到document元素
事件捕获：在右包含关系的标签结构里，从document往下进行触发事件的依次触发，直到事件发生的元素
4. 事件对象 event
5. 事件源 target
6. 事件委托 \*\*\*
事件委托：通过监听一个父元素，来给不同的子元素绑定事件，减少监听事件，从而提升速度。

#### 事件名称

- load 读取(文档/图片)
- scroll 页面/元素滑动事件
- resize 当浏览器大小发生变化的时间
- contextmenu 菜单事件
- focus/blur 聚焦/失焦事件
- change 改变
- input 输入

#### 鼠标事件

- click 单击
- dblclick 双击
- mousemove 鼠标移动
- mouseenter&mouseleave 鼠标进入/鼠标离开
- mouseover&mouseout 鼠标进入/鼠标离开
- mousedown 鼠标按下
- mouseup 鼠标抬起

#### 键盘事件

- keydown 键盘按下
- keyup 键盘抬起
- keypress 键盘按压

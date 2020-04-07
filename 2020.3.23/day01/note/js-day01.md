### 标签

+ div(换行) 块元素 独占一行 如果没有设置宽度 默认的缺省值 width: 100% 就算你给他提供一个100px 那么其他的内容也由margin来撑开
+ span(不换行) 内联元素
+ p 段落
+ a 链接 href
+ img 图片
+ ul > li 列表
+ table > tr > td 表格 表格行 单元格
+ form method "GET/POST" action > input
  + type 控件的功能及形态
  + name 控件的名称
  + value 控件的值
  + id 空间名字的唯一

### 样式

+ 简单选择器
  + 标签选择器 a(TagName)
  + class选择器 .a(className)
  + id选择器 #a(idName)
  + 属性选择器 [a] [a=b] a表示的是属性的名字 b表示的是属性的值
+ 复合选择器
  + 交集选择器 ab
  + 并集选择器 a,b
  + 后代选择器 a b
  + 子代选择器 a > b
  + 兄弟节点选择器 a + b
+ display
  + block
  + inline-block
  + inli ne
  + none
  + table
  + table-row
  + table-cell
+ float
  + 浮动
  + 清浮动 after clear:both overflow:hidden float position
+ position
  + 定位
  + relative 相对定位 自身原来的位置 现在在哪
  + absolute 绝对定位 父级定位元素
  + fixed 固定定位 相对于视窗
  + "子绝父相"

### 班规

1. **及时响应老师**
2. **不要影响到别人**
3. **睡午觉**

## 网页制作的一个发展进程

**C/S** client server(客户端)

**B/S** brower server(网页端)

JS被称为是**客户端语言** 后台语言被称为是**服务端语言**

早期: (before 95) 静态网页(HTML,CSS,PS -> 静态网页)(站长时代) 往往都是一个人开发的(开发,设计,运营)

​	我仅仅只是将网页的内容展示在服务器上,当有用户访问的时候我直接把资源不加修饰的推送给用户

中期: 95-14 PHP,JSP(JAVA),ASP.NET 3P	

​	后端压力重 -> 后端开发压力重,后端服务器压力重

晚期: (after2015)  透过AJAX技术 实现前后端分离 再配合 Vue React Angular

手机端(HTML5/CSS3/ES6 -> JS的第六代版本): 原生APP(native APP) -> (HTML5网页技术)wap网页 -> **hybird**(混合开发模式)

## JavaScript概述

+ **编程语言**
  + HTML(hyper text markup language)和CSS都是**标记语言**
  + 编程语言具有**逻辑**,不再是线性思维,而标记语言是没有逻辑的,是线性思维
  + 其他的编程语言
    + C/C++
    + JAVA
    + PHP
    + Python
    + .NET
  + 语言只有适合不适合,没有完美

+ JavaScript的组成部分
  + **ECMAScript**(ES5/ES6): 语言标准,他确定了视窗(浏览器/APP/手表...)运行的一套标准 -> JS实现了这套标准(其他语言: JScript,coffeeScript,**TypeScript**)
  + **DOM**(document object model) 文档对象模型: 提供一些属性和方法便于控制文档HTML文件(CSS文件)
  + **BOM**(browser object model)浏览器对象模型: 提供一套属性和方法用于控制浏览器

## JS代码或文件引入

+ 外部引入

```html
	<script src="1.js"></script>
```

+ 内部引入

```html
<script>
	//这里写JS代码
</script>
```

## F12控制台相应内容

+ **Elements**: 当前网页的HTML结构和CSS样式都能在这个模块中显示
+ **Console**: JS输出的内容会在这里显示
+ **Sources**: 表示这个网站加载的内容 
+ **NetWork**: 表示网站加载内容的顺序和时间

## 变量

### 变量的概念

就是一个**可变**的量(与之相对应的内容就是**常量**),他往往需要一个标志或者说是名字,来表示这个变量

money: 0 -> 100 -> 150

### 变量的声明
```javascript
var userNameLogin;  // ES5之前声明变量的方式
let money;		// ES6之后声明变量的方式
// 如上所述 如果变量只声明 但不赋值 那么他的值是undefined
let total = 100;

如果这次声明是第一次声明 -> 初始化变量
```
### 变量的赋值
```
userNameLogin = 10;
```
### 变量的定义

变量的定义 = 变量的声明 + 变量的赋值

var/let 声明一个变量
a是变量名
=是赋值符号
10是变量值

名值对name-value(键值对key-value)

```
var killNum = 10;
//创建一个变量a且初始化的值为10
let studentName = "张三";		//字符串 -> 凡是用双引号或者单引号括起来的东西就是字符串 
//一段有一定语义文本就是字符串
//创建一个变量studentName且初始化的值为张三
```
### 静态类型和动态类型

```javascript
//数据类型
//动态类型语言声明变量只需要声明变量值
//JS
var num = 123;
let str = "北";
//JAVA
//静态类型语言声明变量不仅需要声明变量值,还需要声明变量类型
int num = 123;
char str = "北";
```

#### ES6补充

```
var (es5的变量的定义)
let (es6的变量的定义)
const (es6的常量的定义)
```
#### let
1. 不存在变量提升
2. 存在块级作用域(for和if...else)
3. 不允许重复定义
4. 存在暂时性死区(TDZ)

#### const
1. const不可以被改变,在js中充当常量的意思

   Assignment to constant variable. 不可以为常量重新赋值

2. const初始化的时候 必须赋值

**常量真的不可以被修改吗?可以被修改**

### 变量的命名规则

+ 大小写敏感

```javascript
let n = 100;
let N = 80;
console.log(n)   // 100
console.log(N)	 // 80
```

+ 变量命名只能用数字,字母,下划线,$来命名(特别的:不可以用数字做首字母)

```javascript
let student_name
let sStudentName(匈牙利命名法,驼峰式命名法) // 匈牙利命名法的意思是在首位加上变量的类型(string),驼峰式命名法的意思是 在每个英文单词的首字母都大写除了第一个英文单词
//string 字符串 number 数字 boolean 布尔 object 对象 element 元素
let $student_name(都被认为是JQ的变量) jQ被认为是js的一个类库
let _student_name(都被认为公共变量)

let yhxx;myxxx; //不要用拼音
```

+ 一般情况有两种命名规则,分别驼峰式命名法和下划线式命名法

```javascript
let studentInfoName = "张三"
//驼峰式: 除了第一个单词以外,其他的单词首字母大写
let student_info_name = "张三"
//下划线式: 单词和单词之间用下划线分割

// 以后你写任何东西都请不要用空格这个东西做名字
```

+ 变量名命名不能用**关键字**或**保留字**
  + JS语言现在正在使用的英文核心单词就是关键字
  + JS语言未来标准想要使用的英文核心单词就是保留字

```javascript
let let = 123;	//不可以
var var = "北京";		//不可以
let LET = 123;
let _let = 123;
```

## 数据类型

+ 基本数据类型(简单数据类型)
  + **Number**(数字)
    + NaN  非数字
    + Infinity  无穷大 | 无穷小
  + **String**(字符串)
    + 但凡是用单引号,双引号,反引号括起来的都是字符串
  + **Boolean**(布尔)
    + 逻辑 <=> 数学
    + true <=> 1
    + false <=> 0
  + **Null**(空)
  + **Undefined**(未定义的|未赋值的)
  + **Symbol**(ES6,唯一的)
+ 复合数据类型(合成数据类型)
  + **Object**(对象)
    + Array(数组)
    + Function(函数)
    + Date(日期)
    + ...

```JavaScript
//基本数据类型
//Number
let num = 123;			//Number
let num2 = -10;
let num3 = 3.14;
//NaN(not a number不是一个数字) 表达不是一个数字的数字类型

//String 双引号或者单引号括起来的区域就是字符串
let str = "张三"
let cityName = "北京"
let personName = '赵四'
let t = "true"
let n1 = "1"

//Boolean 布尔 只有两种值(真true/假false)
let boo = true;
let boo = false;

//Null 空
let n = null;

//Undefined 未赋值的;
let u;
console.log(u)			//undefined

//思考题 ""和null和undefined有什么区别?

//复合数据类型
//Object 对象(万事万物皆对象)
let obj = {};

//Array 数组对象
let arr = [];

//Function 函数对象
function xxx() {
    
}
```

## 运算符

### 基本(算术)运算符
+ `+`
  + 加法
  + 一元正号
+ `-`
  + 减法
  + 一元负号
+ `/` 除法
+ `*` 乘法
+ `%` 求余(取模)
+ `**` 幂
+ `++` 递增
+ `--` 递减

#### +
```
+ 有两种语义
 1.就是数学上的相加
 2.连接符号两侧的内容
 当+左右有一个字符串的时候就会充当连接功能
 	a.如果有两个字符串,那就直接连接
 	b.如果有一个字符串,那就将另一个非字符串隐式转换成字符串再进行连接
```
#### A++&A-- 后置自增运算符

#### ++A&--A 前置自增运算符

```
自己加1
A++和++A的区别.
A++先自增再赋值
++A先赋值再自增
a+=7 => a = a + 7
```

### 赋值运算符

赋值运算符（**assignment operator**）基于右值（right operand）的值，给左值（left operand）赋值。

| 名称                                                         | 简写形式  | 含义         |
| ------------------------------------------------------------ | --------- | ------------ |
| [赋值（Assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment) | `x = y`   | `x = y`      |
| [加赋值（Addition assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Addition_assignment) | `x += y`  | `x = x + y`  |
| [减赋值（Subtraction assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Subtraction_assignment) | `x -= y`  | `x = x - y`  |
| [乘赋值（Multiplication assigment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Multiplication_assignment) | `x *= y`  | `x = x * y`  |
| [除赋值（Division assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Division_assignment) | `x /= y`  | `x = x / y`  |
| [模赋值（Remainder assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Remainder_assignment) | `x %= y`  | `x = x % y`  |
| [指数赋值（Exponentiation assignment）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Exponentiation_assignment) | `x **= y` | `x = x ** y` |

#### =

```
=在数学左边运算右边"显示等于什么"
=在js中叫做赋值
== 判断相等
=== 判断既值相等且类型相等
```
### 逗号操作符(非重点)

+ 本意是 **逗号操作符**  对它的每个操作数求值（从左到右），并返回最后一个操作数的值。

```JavaScript
let x = 1;

x = (x++, x);

console.log(x);
// expected output: 2

x = (2, 3);

console.log(x);
// expected output: 3  即返回的永远是最后操作符后一个结果
```

+ 但是一般情况下用于定义多个变量(不过这种情况就不能称之为**逗号运算符**了)

```JavaScript
let i = 0;
let j = 10;
// 等价于
let i = 0, j = 10;
```

### 比较运算符

+ 相等(==)  **请任何时候都禁用==号**
+ 不相等 (!=) **请任何时候都禁用!=号**
+ 严格相等 (===)
+ 严格不相等 (!==)
+ 大于运算符 (>)
+ 大于等于运算符 (>=)
+ 小于运算符 (<)
+ 小于等于运算符 (<=)

### 圆括号运算符

```
() 提高运算符表达式 优先级
```



## 开发辅助

#### console.log
```javascript
console.log(展示相应的内容)
```
#### debugger
在debugger中代码会被挂起,也就是在此处暂停

#### alert (请任何时候都禁用alert)

会让程序挂起,同时输出内容(弹出框)

#### confirm (请任何时候都禁用confirm)

会让程序挂起,点击确认返回true,点击取消返回false(确认框)

#### prompt (请任何时候都禁用prompt)

会让程序挂起,点击确认返回相应内容



## 选择元素

1. document.getElementById(**idName**: string): HTMLElement 根据ID选择相应的标签
2. document.getElementsByTagName(**tagName**: string): HTMLCollection 根据标签名选择相应的标签**集合**
    如果 某个页面只有一个div 选中它的仍然是一个长度为1的集合
      1. 特别的.我们可以缩小选择的范围[**element**: HTMLElement].getElementsByTagName(**tagName**: string): HTMLCollection
3. document.getElementsByClassName(**className**: string): HTMLCollection 根据类名选择相应的标签**集合**
4. document.getElementsByName(**name**: string): HTMLCollection  根据名字选中相应的标签**集合**



## 操作样式



+ id 可以获取标签的id名
+ className 可以获取标签的类名
+ style 可以获取标签的样式
+ [element].style.[styleName]  对element这个标签的某个样式进行修改
+ [element].innerHTML 对element这个标签里面的文本内容进行修改,且标签会被解析
+ [element].innerText 对element中的文本进行修改,且标签不会被解析



## 函数
### 函数的声明
```javascript
function show() {

}
funtion 代表我正在声明一个函数
show 函数的名字
()
{} 函数体,当调用该函数的时候则函数体执行
```
### 函数的调用
```
show()
函数名+()
```
当调用函数的时候代码不会继续向下执行,而是先执行该函数的函数体,当触碰到该函数体的尾部的时候再回到原来的代码中继续向下执行



### 事件函数

+ 事件的本质是函数
+ 事件是异步的(不会马上执行的代码)

事件可以理解为触发器,触发某种条件的时候才会执行该代码
```javascript
//element就是事件的触发器
//eventName 事件的触发方式
[element].[eventName] = function() {

}

obj.onclick = function(){
    console.log("hello world")
}
```


## 判断语句

```javascript
 如果(判断条件){
 	为真的话就执行这里的代码块
 } 否则 {
 	为假的话就执行这里的代码块
 } 
```
```javascript
// 1.只写一个判断条件,满足就进入,不满足就不执行
if(判断条件) {
	
}

// 2.写两个判断条件,满足就进入第一个代码段,不满足就进入第二个代码段,必定会进入其中一个代码段
if(判断条件) {
	//判断条件为真的情况下执行的代码
} else {
    //判断条件为假的情况下执行的代码
}
//不论如何都会执行其中一个代码块"{}"的内容

// 3.写多个判断条件,
if(判断条件1) {
  	//当满足判断条件1的时候,就会执行这里的代码,且一定不会再去执行后续代码
} else if(判断条件2) {
    //当不满足判断条件1且满足判断条件2的时候,就会执行这里的代码,且一定不会再去执行后续代码
} else {
    //当不满足所有判断条件的时候,那么就会执行else中的代码
}

```

```javascript
if (a > b) {
	console.log("a比b大")
} else {
	console.log("a不比b大")
}
```
```javascript
if (a > b) {
	console.log("a大于b")
} else if (a === b) {
	console.log("a等于b")
} else if (a < b) {
	console.log("a小于b")
} else {

}
```


## 循环语句

1. for
```javascript
for(初始值;判断条件;变量){
		循环体
}
```
2. while
```javascript
循环一直执行,只要当判断条件是false的时候就停止
while(判断条件为真时,则继续执行循环体,判断条件为假时,则跳出循环体){
    循环体
}
```
3. do...while
```javascript
先执行一次do中的代码块
do {
	循环体
} while(当判断条件为真时,则继续执行循环体,判断条件为假时,则跳出循环体)
```
4. 双重for循环

```javascript
// 一般用来解决二维数据
// 内循环循环一轮,外循环循环一次
for() {
	for() {
	
	}
}
```



## innerHTML

向某个标签中添加html代码,所有的html标签都会被解析

#### 注意点
当结果中同时有字符串和变量的时候 变量和字符串之间的连接必须要用+号

#### 注意点二
当字符串中,还需要引号的时候,必须遵循双遇单,单遇双的原则



## 同步和异步

#### 同步

同步或者说同步代码,他会马上执行```for```是最典型的同步代码

#### 异步

异步代码会延迟执行```事件函数```都是典型的异步代码



## 明日预习

1. 循环补充 while/do...while break/continue
2. 判断补充 switch case break default
3. *Number(数字)&Math(数学)
4. *数据类型的判断和数据类型的转换
   1. 隐式转换
   2. 显式转换
5. 双重for循环/九九乘法表
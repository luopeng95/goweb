# Vue基础

## 前言

先聊一下前端开发模式的发展。

> 静态页面

最初的网页以HTML为主，是纯静态的网页。网页是只读的，信息流只能从服务的到客户端单向流

通。**开发人员也只关心页面的样式和内容**即可。

> 异步刷新，操作DOM

- 1995年，网景工程师Brendan Eich 花了10天时间设计了JavaScript语言.

  随着JavaScript的诞生，我们可以操作页面的DOM元素及样式，页面有了一些动态的效果，但是依

  然是以静态为主。

- ajax盛行：

  2005年开始，ajax逐渐被前端开发人员所重视，因为不用刷新页面就可以更新页面的数据和渲染效果。此时的开发人员不仅仅要编写HTML样式，还要懂ajax与后端交互，然后通过JS操作Dom元素来实现页面动态效果**。比较流行的框架如Jquery就是典型代表。

> MVVM，关注模型和视图

- 2008年，google的Chrome发布，随后就以极快的速度占领市场，超过IE成为浏览器市场的主导者。

- 2009年，Ryan Dahl在谷歌的Chrome V8引擎基础上，打造了基于事件循环的异步IO框架：Node.js。
  - 基于时间循环的异步IO
  - 单线程运行，避免多线程的变量同步问题
  - JS可以编写后台diamante，前后台统一编程语言

- node.js的伟大之处不在于让JS迈向了后端开发，而是构建了一个庞大的生态系统。

- 2010年，NPM作为node.js的包管理系统首次发布，开发人员可以遵循Common.js规范来编写Node.js模块，然后发布到NPM上供其他开发人员使用。目前已经是世界最大的包模块管理系统。随后，在node的基础上，涌现出了一大批的前端框架：

![image-20200526042452175](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526042452175.png)

> MVVM

- M：即Model，模型，包括数据和一些基本操作

- V：即View，视图，页面渲染结果

- VM：即View-Model，模型与视图间的双向操作（无需开发人员干涉）

在MVVM之前，开发人员从后端获取需要的数据模型，然后要通过DOM操作Model渲染到View中。而

后当用户操作视图，我们还需要通过DOM获取View中的数据，然后同步到Model中。

而MVVM中的VM要做的事情就是把DOM操作完全封装起来，开发人员不用再关心Model和View之间是如何互相影响的：

- 只要我们Model发生了改变，View上自然就会表现出来。

- 当用户修改了View，Model中的数据也会跟着改变。

把开发人员从繁琐的DOM操作中解放出来，把关注点放在如何操作Model上。



![image-20200526042628720](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526042628720.png)

而我们今天要学习的，就是一款MVVM模式的框架：Vue

## 认识Vue

Vue (读音 /vjuː/，类似于 **view**) 是一套用于构建用户界面的**渐进式框架**。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。

前端框架三巨头：Vue.js、React.js、AngularJS，vue.js以期轻量易用著称，vue.js和React.js发展速度最快,AngularJS关注度已经开始下滑。

官网：https://cn.vuejs.org/

参考：https://cn.vuejs.org/v2/guide/

![image-20200526042819400](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526042819400.png)

Git地址：https://github.com/vuejs

## Node和NPM

前面说过，NPM是Node提供的模块管理工具，可以非常方便的下载安装很多前端框架，包括Jquery、AngularJS、VueJs都有。为了后面学习方便，我们先安装node及NPM工具。

### 下载Node.js

下载地址：https://nodejs.org/en/download/

![image-20200526043016908](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526043016908.png)

推荐下载LTS版本。

课程中采用的是v10.16.3版本。大家自行下载。然后下一步安装即可。

完成以后，在控制台输入：

node -v

看到版本信息：

![image-20200526043127932](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526043127932.png)

### NPM

安装完成Node应该自带了NPM了，在控制台输入 npm -v 查看：

![image-20200526043211959](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526043211959.png)



npm默认的仓库地址是在国外网站，速度较慢，建议大家设置到淘宝镜像。但是切换镜像是比较麻烦

的。推荐一款切换镜像的工具：nrm

我们首先安装nrm，这里 -g 代表全局安装

```bash
npm install nrm -g // window 平台下运行这个命令
sudo npm install nrm -g // mac或者linux 平台下运行这个命令
```

然后通过 nrm ls 命令查看npm的仓库列表,带*的就是当前选中的镜像仓库：

![image-20200526043748590](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526043748590.png)

通过 nrm use taobao 来指定要使用的镜像源：

![image-20200526043821575](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526043821575.png)

然后通过 nrm test npm 来测试速度：

![image-20200526043900540](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526043900540.png)

注意：

有教程推荐大家使用cnpm命令，但是使用发现cnpm有时会有bug，不推荐。

- 安装完成请一定要重启下电脑！！！

- 安装完成请一定要重启下电脑！！！

- 安装完成请一定要重启下电脑！！！

## 快速入门

### 创建项目

```bash
mkdir vue-demo // 创建项目目录
```

![image-20200526044634751](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526044634751.png)

### 安装Vue

#### 直接通过脚本引入

开发版本下载地址：https://cn.vuejs.org/js/vue.js

生产版本下载地址： https://cn.vuejs.org/js/vue.min.js

开发版本包含完整的警告和调试模式，生产版本删除了警告，33.30KB min+gzip。

#### 使用CDN

最新版本：

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

明确的版本号和构建文件:

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
```

原生 ES Modules

```html
<script type="module">
  import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
</script>
```

#### 使用 NPM

```bash
# 最新稳定版
 npm install vue --save
```



node_modules是通过npm安装的所有模块的默认位置。

### 项目的初始化

```bash
cd vue-demo // 进入项目目录
npm init -y // 项目初始化
```

### 新建HTML模版

![image-20200526050017821](%E7%9F%A5%E8%AF%86%E7%82%B9%E5%A4%A7%E7%BA%B2.assets/image-20200526050017821.png)



在 `index.html` 中编写一段简单代码:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <h2>xx 好帅！！！</h2>
    </div>
</body>
</html>
```

h2中要输出一句话：xx 非常帅。前面的xx是要渲染的数据。

### 引入vue的基本库

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
</head>
<body>
    <div id="app">
        <h2>xx 好帅！！！</h2>
    </div>
</body>
<!-- 引入 vue 的开发基本库 -->
<script src="https://cn.vuejs.org/js/vue.js"></script>
</html>
```

### Vue 渲染

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
</head>
<body>
    <div id="app">
        <h2>{{name}} 好帅！！！</h2>
    </div>
</body>
<!-- 引入 vue 的开发基本库 -->
<script src="https://cn.vuejs.org/js/vue.js"></script>
<script>
    let vm = new Vue({
        el:"#app",
        data:{
            name:"王帅"
        }
    })
</script>
</html>
```

- 首先通过 new Vue()来创建Vue实例

- 然后构造函数接收一个对象，对象中有一些属性：

  - el：是element的缩写，通过id选中要渲染的页面元素，本例中是一个div

  - data：数据，数据是一个对象，里面有很多属性，都可以渲染到视图中

    name：这里我们指定了一个name属性

页面中的 h2 元素中，我们通过{{name}}的方式，来渲染刚刚定义的name属性。

## [数据绑定](https://cn.vuejs.org/v2/guide/syntax.html)

#### 插值表达式

​	如果希望在视图中绑定vue的响应式数据，需要将数据使用双花括号包裹，例如：{{msg}}

​	插值表达式内可以写任何的JavaScript表达式，例如：{{1+1}}，{{1<2}}，{{fn()}}

​	注意: 插值表达式内部的变量必须是vue的响应式数据或者vue的方法,否则报错. 

​	例如: {{alert(100)}}.alert不是vue实例的方法,因此会报错.

#### 指令

##### v-on

vue可以将vue的方法绑定到一个事件上作为该事件的事件句柄,这时需要使用指令 v-on,例如

```JavaScript
new Vue({
    el:'#app',
    data:{
    	msg:'hello Vue！！'
    },
    methods:{
    	eventHandle(ev){
    		alert('事件句柄触发')
    	},
    	receiveParams(val,ev){
    		alert(val);
    		console.log(ev.target)
    	}
    }
})
```

​	vue的方法写在methods选项内.ev即是事件对象.

```JavaScript
<button v-on:click='eventHandle'>按钮</button>
```

​	事件传参:

```JavaScript
<button v-on:click='receiveParams(100)'>按钮</button>
```

​	传参的同时使用事件对象

```javascript
<button v-on:click='receiveParams(100,$event)'>按钮</button>
```

​	v-on的简写是@，例如：

```javascript
<button @click='receiveParams(100,$event)'>按钮</button>
```

​	v-on绑定其他事件, @事件名 = '事件句柄' ,例如:

```	javascript
<button @mouseover='()=>{alert(100)}'>按钮</button>
<button @mouseout='()=>{alert(200)'>按钮</button>
```

​	列表渲染中传参数

```JavaScript
new Vue({
    el:'#app',
    data:{
    	arr:[1111,2222,3333]
    },
    methods:{
    	eventHandle(i){
    		this.arr[i].splice(i,1)
    	}
    }
})
```

​	以下例子,把列表渲染中的数组项下标传给了事件句柄,这样可以根据下标删除对应的数组元素,从而驱动视图更新.

```javascript
<ul>
	<li v-for='(d,i) in arr'>
        {{d}}
		<button @click='eventHandle(i)'>插入新li</button>
	</li>
</ul>
```





##### v-bind

视图的内容可以通过插值表达式插入vue响应式数据.

​	如果希望将响应式数据绑定到视图的属性上,需要使用vue的v-bind指令.

```
<div id='app' v-bind:class='className'>{{msg}}</div>
```

```javascript
new Vue({
    el:'#app',
    data:{
        className:'active',
        msg:'hello Vue！！'
    }
})
```

​	注意：绑定数据到属性上时，不需要写{{}}，例如不能这样：v-bind:class='{{className}}'

​				经过v-bind处理后，class的属性值也可以写任意表达式，但是变量也必须是vue的属性或者方法。

​				v-bind可以给任意属性绑定数据，例如：

```javascript
<div id='app' v-bind:class='className' v-bind:title='msg'>{{msg}}</div>
```

​				v-bind还可以简写,简写就是一个:  例如: 

```javascript
<div id='app' :class='className' :title='msg'>{{msg}}</div>
```

​				v-bind绑定class可以有特殊写法,例如:

```javascript
<div id='app' :class='["active","float"]'>{{msg}}</div>
```

```javascript
<div id='app' :class='[className1,className2]'>{{msg}}</div>
```

```javascript
<div id='app' :class='{active:true,float:true}'>{{msg}}</div>
```

​				v-bind绑定style可以有特殊写法，例如：

```javascript
<div id='app' :style='{width:"100px"}'>{{msg}}</div>
```

```javascript
<div id='app' :class='{width:divWidth}'>{{msg}}</div>
```



##### v-model

​	vue可以将表单元素的value更新到vue本身的响应式数据身上,通过响应式数据再驱动其他视图更新,用以实现双向数据绑定.

```javascript
new Vue({
    el:'#app',
    data:{
    	msg:'hello Vue！！',
        flag:true，
        arr:[]
    }
})
```

​	这样给input绑定v-model指令后,在input输入时,会将输入的内容同步更新vue的msg数据.

```javascript
<input type='text' v-model='msg' />
```

​	给checkbox绑定v-model,并且绑定布尔值,则vue会根据checkbox的勾选状态来更新vue的flag数据。

```JavaScript
<input type='checkbox' v-model='flag' />
```

​	给checkbox绑定v-model,并且绑定一个数组,则vue会根据checkbox的勾选状态来更新arr中的数据。

```JavaScript
<input type='checkbox' v-model='arr' value='苹果' />
<input type='checkbox' v-model='arr' value='香蕉' />
<input type='checkbox' v-model='arr' value='山竹' />
```



##### v-text 和 v-html

​	除了通过插值表达式给视图插入变量,还可以通过v-text和v-html实现相同效果.

​	v-text不能插入标签，v-html可以插入标签。v-html不安全，必须确定插入的内容是安全。

```JavaScript
new Vue({
    el:'#app',
    data:{
    	text:'你好',
        html:'<p>段落内容</p>'
    }
})
```

```javascript
<div v-text='text'></div>
<div v-text='html'></div>
```



##### v-pre和v-once

v-once绑定的数据只会驱动一次视图。后续更新不会更新视图。

​	v-pre可以给视图插入类似{{}}这类的字符，而不会被解析为插值表达式。

```JavaScript
new Vue({
    el:'#app',
    data:{
    	text:'你好',
        pre:'{{1+1}}'
    }
})
```

```javascript
<div v-once='text'></div>
<div v-pre='pre'></div>
```



##### v-cloak

​	v-cloak通过隐藏挂载前视图来达到页面由一瞬间显示插值表达式的问题，视图挂载后会自动显示。

##### v-if

可以通过vue的响应式数据控制一个视图的显示和隐藏. 这时可以使用 v-if指令

```JavaScript
new Vue({
    el:'#app',
    data:{
        flag:true,
        name:'Vue'
    }
})
```

```javascript
<div id='app' v-if='flag'>111111</div>
```

​	如果flag是true，则div显示，否则隐藏.相应的，还可以通过v-else来实现两个视图只显示之中一个。例如

```javascript
<div id='app' v-if='flag'>111111</div>
<div id='app' v-else >222222</div>
```

​	还可以通过添加多个v-esle-if指令来选择性让多个视图只显示其中一个。

```javascript
<div id='app' v-if='name==="Vue"'>111111</div>
<div id='app' v-else-if='name==="React"'>222222</div>
<div id='app' v-else>111111</div>
```



##### v-show





##### v-for

vue可以让视图根据数组或者纯对象的数据结构来渲染视图.这时需要使用v-for指令. 例如:

```JavaScript
new Vue({
    el:'#app',
    data:{
        arr:['vue','React','Angular'],
        obj:{name:'张三',sex:'男',age:20}，
        goods:[{count:1},{count:2},{count:3}]
    }
})
```

​	vue可以根据arr数据渲染出如下视图:

```
<ul>
    <li>vue</li>
    <li>React</li>
    <li>Angular</li>
</ul>
```

​	只需通过v-for指令绑定arr到 li 上

```javascript
<li v-for='(d,i) in arr'>{{d}}</li>
```

​	vue还可以根据obj渲染出以下视图.

	<ul>
	    <li>name:张三</li>
	    <li>age:20</li>
	    <li>sex:男</li>
	<ul>

```JavaScript
<li v-for='(val,key) in arr'>{{key}}:{{val}}</li>
```

​	嵌套列表渲染，以下例子，li循环v-for的对象变成了第一个v-for循环的项item。

```JavaScript
<ul v-for='(item,i) in goods'>
	<li v-for='val in item'>{{val}}</li>
</ul>
```




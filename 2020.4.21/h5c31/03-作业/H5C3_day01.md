# H5C3第1天

## 基础案例

### 01-《美的》导航搜索

#### 训练描述

原版的《美的》官网，搜索栏鼠标经过后出现搜索框，失去焦点还原，并且是以过渡的方式

#### 训练提示

1. 搭建以项目为主的几个文件
2. 书写导航栏页面布局
   - logo原图比较大，需要设置父盒子宽度和自身的100%
   - 设置导航项
   - 右侧基本都是精灵图，所以不需要使用字体图标，注意间距的调整
3. 将搜索框设置成初始位置，然后当鼠标经过的时候，设置宽度和透明度变化

#### 操作步骤

1. 创建index文件，新建css文件夹，创建base.css文件并初始化基本代码，新建images文件夹

2. 创建index.css保存至css文件夹，首页html文件引入css样式

3. 编写结构代码

   - 创建版心盒子，左左右模块，分别代表logo，导航项，右侧信息

     ```html
     <header>
     	<div class="logo"></div>
     	<div class="topnav">
     		<ul>
     			<li><a href="#">首页</a></li>
     			<li><a href="#">商家入驻</a></li>
     			<li><a href="#">企业采购</a></li>
     			<li><a href="#">全屋家电套购</a></li>
     			<li><a href="#">会员福利社</a></li>
     			<li><a href="#">美的分期</a></li>
     		</ul>
     	</div>
     	<div class="right-info">
     		<ul>
     			<li class="searchbox">
     				<input type="text" placeholder="美的热水器">
     				<i class="icon-meidi search"></i>
     			</li>
     			<li class="mobilebox">
     				<i class="icon-meidi mobile"></i>
     			</li>
     			<li class="carbox">
     				<i class="icon-meidi car"></i>
     			</li>
     			<li class="loginbox">
     				<i class="icon-meidi login"></i>
     				<span>登录</span>
     			</li>
     		</ul>
     	</div>
     </header>
     ```

   - 排版logo和导航项的内容

     ```java
     body {
     	height: 2000px;
       	/*这句话可以不要，没有什么太大的帮助*/
     }

     header {
     	min-width: 1200px;
     	height: 44px;
     	background-color: #0092d8;
     }

     header .logo {
     	float: left;
         width: 120px;
         height: 44px;
         background-image: url(../images/index_service_sprite@2x.png);
         background-repeat: no-repeat;
         background-size: 200px 80px;
         background-position: -80px 0;
     }

     header .topnav {
     	float: left;
     	height: 44px;
     }

     header .topnav li {
     	float: left;
     }

     header .topnav li a {
     	display: block;
     	height: 44px;
     	line-height: 44px;
     	color: #a3c3e6;
     	font-size: 12px;
     	padding: 0 30px;
     }

     header .topnav li a:hover {
     	color: #fff;
     }
     ```

   - 下载相关的图片，排版右侧信息内容

     ```java
     .right-info {
     	float: right;
     }

     .right-info li {
     	float: left;
     	height: 44px;
     	position: relative;
     }

     .right-info li input {
     	width: 100%;
     	height: 100%;
     	text-indent: 2rem;
     	opacity: 0;
     }

     .icon-meidi {
     	display: block;
         width: 20px;
         height: 20px;
     	position: absolute;
         right: 30px;
         cursor: pointer;
         background-image: url(../images/index_sprite.png);
         background-repeat: no-repeat;
     }
      
     .search {
     	top: 12px;
         background-position: -96px -215px;
     }
      
     .searchbox {
     	width: 45px;
     	transition: width .4s ease-in;
     }
      
     .searchbox:hover {
     	width: 250px;
     }
      
     .searchbox:hover input {
     	opacity: 1;
     }
      
     .searchbox:hover i {
     	top: 12px;
         left: 10px;
         background-position: -66px -215px;
     }
      
     .mobilebox {
     	width: 65px;
     	padding-top: 11px;
     	box-sizing: border-box;
     }
      
     .mobile {
     	background-position: -120px -215px;
     }
      
     .carbox {
     	padding: 0 20px;
     	padding-top: 11px;
     	box-sizing: border-box;
     }
      
     .car {
     	position: static;
         background-position: -146px -215px;
         cursor: pointer;
     }
      
     .loginbox {
     	width: 85px;
     	padding-top: 11px;
     	box-sizing: border-box;
     }
      
     .login {
     	position: static;
     	float: left;
         width: 20px;
         height: 20px;
         cursor: pointer;
         background-position: -35px -216px;
         margin-left: 20px;
     }
      
     .loginbox span {
     	float: left;
     	font-size: 12px;
     	color: #fff;
     }
      
     .news {
         font-size: 12px;
         background: rgb(0, 59, 102);
         line-height: 16px;
         color: rgb(255, 255, 255);
         text-align: center;
         padding: 4px;
     }
     ```

4. 排版搜索栏默认的样式，设置当鼠标经过父盒子的样式

5. 打开首页文件，观察效果



### 02-《小米》产品

#### 训练描述

这个产品模块中，鼠标经过大盒子，底部有信息模块升上来，并且本身上移2像素，并且加上投影

#### 训练提示

1. 先进行基本的布局，排出来具体的大小位置

2. 添加底部信息块，，定位在bottom底部，完成后，将高度设置为0，加上溢出隐藏属性
3. 当鼠标经过盒子，显示盒子，并且加上阴影和位移

#### 操作步骤

​     1，创建index文件，新建css文件夹并创建base.css文件，初始化css样式

​     2，新建images文件夹，在首页文件中引入样式

​     3，创建基本的结构

```css
	<div class="product">
		<ul>
			<li>
				<div class="pro-img">
					<a href="#">
						<img src="images/pms_1524883847.49276938!220x220.jpg" alt="">
					</a>
				</div>
				<h3><a href="#">小米电视4A 43英寸青春版</a></h3>
				<p class="desc">全高清屏 / 人工智能语音</p>
				<p class="price">
					<span>1499</span>元
					<del>1699</del>
				</p>
				<div class="review">
					<a href="#">
						<span class="msg">一如既往的好，小米情怀</span>
						<span class="auther"> 来自于 惊喜 的评价 </span>
					</a>
				</div>
			</li>
		</ul>
	</div>
```

​      4，排版基本的样式

```java
body {
	padding: 100px;
	background-color: #f5f5f5;
}

.product li {
    float: left;
    width: 234px;
	height: 246px;
    padding: 34px 0 20px;
    z-index: 1;
    margin-left: 14px;
    margin-bottom: 14px;
    background: #fff;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
	position: relative;
}

.pro-img {
	width: 150px;
	height: 150px;
	margin: 0 auto 18px;
}

.pro-img a {
	width: 100%;
	height: 100%;
}

.pro-img img {
	display: block;
	width: 100%;
	height: 100%;
}

.product li h3 {
	margin: 0 10px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
}

.product li h3 a {
	color: #333;
}

.desc {
	margin: 0 10px 10px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: #b0b0b0;
}

.price {
	font-size: 14px;
	margin: 0 10px 10px;
    text-align: center;
    color: #ff6700;
}

.price del {
	color: #b0b0b0;
}

.review {
	position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 234px;
    height: 0;
    overflow: hidden;
    font-size: 12px;
    background: #ff6700;
    opacity: 0;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}

.review a {
	color: #757575;
	display: block;
    padding: 8px 30px;
    outline: 0;
}

.review a span {
	display: block;
	margin-bottom: 5px;
    color: #fff;
}
```

​     5，设置鼠标经过样式

```css
.product li:hover {
	-webkit-box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
  	/*这里的位移可以使用2d的转换方式*/
}

.product li:hover .review {
	opacity: 1;
	height: 76px;
}
```

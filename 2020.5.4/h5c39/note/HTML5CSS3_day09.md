### HTML5 动画

#### 动画(animation)

1. 什么是动画

   - 动画是 `CSS3` 中最具颠覆性的特征之一，可通过设置多个节点来精确的控制一个或者一组动画，从而实现复杂的动画效果

2. 动画的基本使用
   - 先定义动画
   - 在调用定义好的动画

3. 语法格式(定义动画)

   ```css
   @keyframes 动画名称 {
       0% {
           width: 100px;
       }
       100% {
           width: 200px
       }
   }
   ```


4.  语法格式(使用动画)

   ```
   div {
   	/* 调用动画 */
       animation-name: 动画名称;
    	/* 持续时间 */
    	animation-duration: 持续时间；
   }
   ```


5. 动画序列

   - 0% 是动画的开始，100 % 是动画的完成，这样的规则就是动画序列
   - 在 @keyframs 中规定某项 CSS 样式，就由创建当前样式逐渐改为新样式的动画效果
   - 动画是使元素从一个样式逐渐变化为另一个样式的效果，可以改变任意多的样式任意多的次数
   - 用百分比来规定变化发生的时间，或用 `from` 和 `to`，等同于 0% 和 100%

6. 代码演示

   ```css
   <style>
       div {
         width: 100px;
         height: 100px;
         background-color: aquamarine;
         animation-name: move;
         animation-duration: 0.5s;
       }
   
       @keyframes move{
         0% {
           transform: translate(0px)
         }
         100% {
           transform: translate(500px, 0)
         }
       }
     </style>
   ```

#### 动画常见属性

1. 常见的属性

   <img src="images\animationcanshu.png">

   

2. 代码演示

   ```css
   div {
     width: 100px;
     height: 100px;
     background-color: aquamarine;
     /* 动画名称 */
     animation-name: move;
     /* 动画花费时长 */
     animation-duration: 2s;
     /* 动画速度曲线 */
     animation-timing-function: ease-in-out;
     /* 动画等待多长时间执行 */
     animation-delay: 2s;
     /* 规定动画播放次数 infinite: 无限循环 */
     animation-iteration-count: infinite;
     /* 是否逆行播放 */
     animation-direction: alternate;
     /* 动画结束之后的状态 */
     animation-fill-mode: forwards;
   }
   
   div:hover {
     /* 规定动画是否暂停或者播放 */
     animation-play-state: paused;
   }
   ```

#### 动画简写方式

1.  动画简写方式

   ```css
   /* animation: 动画名称 持续时间 运动曲线 何时开始 播放次数 是否反方向 起始与结束状态 */
   animation: name duration timing-function delay iteration-count direction fill-mode
   ```

2.  知识要点

   - 简写属性里面不包含 `animation-paly-state`
   - 暂停动画 `animation-paly-state: paused`; 经常和鼠标经过等其他配合使用
   - 要想动画走回来，而不是直接调回来：`animation-direction: alternate`
   - 盒子动画结束后，停在结束位置：`animation-fill-mode: forwards` 

3. 代码演示

   ```css
   animation: move 2s linear 1s infinite alternate forwards;
   ```

#### 速度曲线细节

1. 速度曲线细节
   - `animation-timing-function`: 规定动画的速度曲线，默认是`ease`

<img src="images\steps.png">



2. 代码演示

   ```css
   div {
     width: 0px;
     height: 50px;
     line-height: 50px;
     white-space: nowrap;
     overflow: hidden;
     background-color: aquamarine;
     animation: move 4s steps(24) forwards;
   }
   
   @keyframes move {
     0% {
       width: 0px;
     }
   
     100% {
       width: 480px;
     }
   }
   ```






//1. 自动轮播

//2. 手指滑动的时候 判断轮播 拿到一个手指起始的位置

//3. 手指滑动的一段距离 手指滑动的距离 方向

//4. 确定手机离开手机
//如果滑动的距离够大就切换图片 否则动都不动
//定时器中立变量
let slideTimer = null;
//中立变量来表示当前位于那张图片
let slideNow = 0;
let slide = document.querySelector(".slide");
let slideContainer = document.querySelector(".slide ul");
let containerWidth = slideContainer.clientWidth;

//初始化两个li 分别是第一个li(是最后一个li的克隆体) 和最后一个li(是第一个li的克隆体)
let firstLi = slideContainer.children[0].cloneNode(true);
let lastLi = slideContainer.children[slideContainer.children.length - 1].cloneNode(true);

//将这两个li分别插入到前后两侧
slideContainer.appendChild(firstLi)
slideContainer.insertBefore(lastLi, slideContainer.children[0])

let slideItem = document.querySelectorAll(".silde ul li");

slideTimer = setInterval(() => {
  slideNow++ /* 0 -> 1 */
  let n = -(slideNow * 100) + "%"
  //每次滑动前又给他补充回动画
  slideContainer.style.transition = "all .3s"
  slideContainer.style.transform = `translateX(${n})`
}, 2000);

//过渡结束? transitionend
slideContainer.addEventListener("transitionend", function () {
  //当图片滚动到第三张(其实是第四张)
  if (slideNow === 3) {
    //悄悄摸摸的将translateX 从 -300% 转移到 0
    //slideNow 修正0
    slideNow = 0;
    slideContainer.style.transition = "none"
    slideContainer.style.transform = `translateX(0%)`
  } else if (slideNow === -1) {
    //悄悄摸摸的将translateX 从 0 转移到 -300% 
    //slideNow 修正-300%
    slideNow = 2;
    slideContainer.style.transition = "none"
    slideContainer.style.transform = `translateX(-200%)`
  }
})

//手指按下的坐标点位置
let startX = 0;
//手指松开时候的坐标点位置
let endX = 0;

slideContainer.addEventListener("touchstart", function (e) {
  console.log("开始点触了")
  console.log(e.touches[0].pageX) //起始点
  startX = e.touches[0].pageX;

  //点触开始的时候停止定时器
  clearInterval(slideTimer)
})

slideContainer.addEventListener("touchend", function (e) {
  console.log("结束点触了")
  console.log(e.changedTouches[0].pageX)
  endX = e.changedTouches[0].pageX
  //滑动4分之一个部分就动起来
  //距离不够 无事发生
  //距离够了 他俩的差值是负值 向后走
  //距离够了 他俩的差值是正值 向前走
  if (Math.abs(startX - endX) <= containerWidth / 4) {
    console.log("我不想动")
  } else {
    if (startX - endX < 0) {
      slideNow--
      let n = -(slideNow * 100) + "%"
      //每次滑动前又给他补充回动画
      slideContainer.style.transition = "all .3s"
      slideContainer.style.transform = `translateX(${n})`
    } else {
      slideNow++
      let n = -(slideNow * 100) + "%"
      //每次滑动前又给他补充回动画
      slideContainer.style.transition = "all .3s"
      slideContainer.style.transform = `translateX(${n})`
    }
  }

  //让定时器可以重新运动
  slideTimer = setInterval(() => {
    slideNow++ /* 0 -> 1 */
    let n = -(slideNow * 100) + "%"
    //每次滑动前又给他补充回动画
    slideContainer.style.transition = "all .3s"
    slideContainer.style.transform = `translateX(${n})`
  }, 2000);
})
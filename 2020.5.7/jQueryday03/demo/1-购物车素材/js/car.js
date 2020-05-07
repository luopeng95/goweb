$(function () {
  //全选框及其业务 价格
  //选中之后变色
  //已经选4件商品 已经选了1种商品
  //删除单个商品 提供一个恢复操作

  //全局变量
  let $cartItems = $(".cart-item") //所有的商品的items (div)
  calcTotal()
  //购物车数量及其相关
  //为购物车的+绑定事件
  $(".increment").click(function () {
    $(this).siblings(".itxt").val(function (index, value) {
      let count = Number(value);
      return count + 1
    })
    //拿到该元素对象
    let obj = getChatItem($(this))
    changeSum(obj.$count, obj.$price, obj.$sum)
  })
  //为购物车的-绑定事件
  $(".decrement").click(function () {
    console.log("minus")
    $(this).siblings(".itxt").val(function (index, value) {
      let count = Number(value);
      if (count > 1) {
        return count - 1
      }
      return count
    })
    let obj = getChatItem($(this))
    changeSum(obj.$count, obj.$price, obj.$sum)
  })
  //为购物车的数量的文本框 绑定change事件
  $(".itxt").change(function () {
    let obj = getChatItem($(this))
    changeSum(obj.$count, obj.$price, obj.$sum)
  })

  //删除每件商品 a标签
  $(".p-action a").click(function () {
    let obj = getChatItem($(this))
    $(obj.$parent).remove();
    calcTotal()
  })

  //清空购物车
  $(".clear-all").click(function () {
    $(".cart-item-list").empty()
    calcTotal()
    //您的购物车没有商品哦!
  })

  //删除选中的商品
  $(".remove-batch").click(function () {
    $(".cart-item input:checkbox:checked").parents(".cart-item").remove();
    calcTotal()
    // let obj = getChatItem($(".cart-item input:checkbox:checked"))
  })

  function getChatItem($ele) {
    // let $parent = $(".cart-item").has($ele) //表示你操作的内容是属于哪个商品div的;
    // //表示该商品的单价
    // let $price = $parent.children(".p-price")
    // //表示商品的数量
    // let $count = $parent.find(".itxt")
    // //表示商品的删除按钮
    // let $decrement = $parent.find(".decrement")
    // //表示商品的增加按钮
    // let $increment = $parent.find(".increment")
    // //表示商品的小计
    // let $sum = $parent.find(".p-sum")
    // //表示商品的删除a标签
    // let $delete = $parent.find(".p-action a");
    //如果$ele是他的子元素 就找到父亲 否则就是他自己
    let $parent;
    if ($ele.hasClass("cart-item")) {
      $parent = $ele
    } else {
      $parent = $(".cart-item").has($ele)
    }
    return {
      $parent: $(".cart-item").has($ele),
      $price: $parent.children(".p-price"),
      $count: $parent.find(".itxt"),
      $decrement: $parent.find(".decrement"),
      $increment: $parent.find(".increment"),
      $sum: $parent.find(".p-sum"),
      $delete: $parent.find(".p-action a")
    }
  }

  //渲染小计
  function changeSum($count, $price, $sum) {
    let sum = getSum(getCount($count), getPrice($price))
    calcTotal()
    $sum.text(`¥${sum.toFixed(2)}`)
  }

  //计算小计方法 
  function getSum(count, price) {
    return Number((count * price).toFixed(2))
  }

  //拿到当前商品的个数数字
  function getCount($count) {
    return $count.val()
  }

  //拿到当前商品的价格数字
  function getPrice($price) {
    return $price.text().slice(1)
  }

  //计算总价
  function calcTotal() {
    let total = 0;
    $(".cart-item").has(".j-checkbox:checked").each(function (index, domEle) {
      console.log(domEle)
      let obj = getChatItem($(domEle)); //所有的对象
      console.log(obj)
      let sum = getSum(getCount(obj.$count), getPrice(obj.$price)) //小记价格
      total += sum
    })
    // 渲染总价
    $(".price-sum em").text(`¥${total.toFixed(2)}`)
  }
})
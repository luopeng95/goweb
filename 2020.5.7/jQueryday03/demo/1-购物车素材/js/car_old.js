$(function () {
  //全选框及其业务

  //购物车数量及其相关
  //为购物车的+绑定事件
  $(".increment").click(function () {
    $(this).siblings(".itxt").val(function (index, value) {
      let count = Number(value);
      return count + 1
    })
    //计算小计
    changeSum()
  })
  //为购物车的-绑定事件
  $(".decrement").click(function () {
    console.log("minus")
    $(this).siblings(".itxt").val(function (index, value) {
      let count = Number(value);
      if (count > 1) {
        return count - 1
      }
    })
    //计算小计
    changeSum()
  })
  //为购物车的数量的文本框 绑定change事件
  $(".itxt").change(function () {
    console.log("改变数量了")
    changeSum()
  })
})

function changeSum() {
  let price = $(this).parents(".p-num").siblings(".p-price").text().slice(1); //12.60
  let count = $(this).val() //2
  let sum = price * count;
  //计算小计
  // $(this).parent().parent()
  $(this).parents(".p-num").siblings(".p-sum").text(`¥${sum.toFixed(2)}`)
}
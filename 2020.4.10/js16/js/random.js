let _random = (min, max, digits) => {
  let num;
  //仅有一个参数的时候 0-min
  if (!max) {
    num = Math.random() * min
  } else {
    //min,max
    num = Math.random() * (max - min) + min
  }
  if (digits === "undefined" || digits === 0) {
    num = Math.floor(num)
  } else {
    num = Number(num.toFixed(digits))
  }
  return num
}
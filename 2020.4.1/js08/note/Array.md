# 定时器
setTimeout 页面会在time毫秒后执行一次callback
```JavaScript
setTimeout(callback, time);
```
clearTimeout 页面会清除定时器timer
```JavaScript
clearTimeout(timer)
```
setInterval 页面会每隔time毫秒执行一次callback
```JavaScript
setInterval(callback, time);
```
clearInterval 页面会清除定时器timer
```JavaScript
clearInterval(timer)
```

# 数组(Array)
```JavaScript
let arr = [];
let arr = new Array();  //参数表达的是数组的长度
let arr = Array.of();   //直接书写真正的数组
```

### length属性

特别特殊: 可getter**可setter**

## 检测数组

+ Array.isArray(temp) 返回一个布尔类型
+ *Array.from()*

## 栈方法

+ **push()
+ **pop()

## 队列方法

+ **shift()
+ **unshift()

## 重排序方法
+ reverse()
+ **sort()

## 操作方法
+ concat()
```JavaScript
let arr,arr2,arr3
let newArr = arr1.concat(arr2, arr3)
let newArr = [...arr1, ...arr2, ...arr3]
```
+ slice() 找到子数组的方法
+ **splice(start, deleteCount, item1, item2, ...)

## 位置方法

+ indexOf(val)  
+ lastIndexOf(val)  

## 迭代方法

+ **forEach(callback(element, index, arr)) 规定return undefined
+ every() 判断整个数组是否满足某个条件 满足true && 
+ some() 判断整个数组中有满足该条件的 有就true ||  
+ filter() 类似一个过滤器,返回一个过滤后的内容 
+ **map()  对每个数组元素执行回调函数且返回一个新的数组
+ *for...of* 遍历迭代器(能被for...of迭代的实例)
  + Array
  + String
  + Set
  + Map
  + Arguments
  + *keys()*
  + *values()*
  + *entitys()*

## 归并方法  
+ flat()
+ reduce()  
+ reduceRight()  

# 扩展运算符

三个点 **...**

# 集合(Set)
+ 确定性
+ 无序性
+ 互异性



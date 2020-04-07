# 算法基础
算法最基础的内容是三点

+ 查询
+ 排序
+ 去重

## 冒泡排序
## 交换变量
# 集合 Set(ES6)

+ 确定性
+ 互异性  

# String
其实我们可以把String看成是一个简单的数组
## 属性
+ length String的length才是真正的length属性,一般情况下length属性是只可读不可写的

## 方法
### 查询方法

+ charAt(index) str[4] <===> str.charAt(4)
+ charCodeAt(index) 根据下标查询对应位置的字符的Unicode码点 a -> 97
+ String.fromCharCode(unicode) 根据Unicode查询对应的字符

### 匹配方法

+ **indexOf()   
  + 非贪婪(贪心)算法/懒汉模式 
  + 查找到第一个满足条件的子串 
  + 查找的位置是头部的位置 
  + 如果查找不到的话 那么返回是的-1
+ lastIndexOf()
  + 从右向左
+ *startsWith()*
+ *endsWith()*

### 截取方法

+ substr(已废弃)
+ substring(start, end) 
  + 支持数字颠倒
  + **包头不包尾**
+ slice(start, end) 
  + 支持负数,即从右到左计算
  + **包头不包尾**
+ **trim() 清除两边空格
  + trimLeft
  + trimRight

## 修改及转换方法

+ toUpperCase() 转大写
+ toLowerCase() 转小写
+ **split(temp) 根据temp截取字符串为数组
+ **Array.prototype.join()


//确定了Person接口 必须有两个参数 一个叫name 另一个叫age
interface Person {
  name: string
  age: number
}

//确定了Student类 且实现了 Person接口
class Student implements Person {
  name: string
  age: number
  sAge: number
  constructor(name: string, age: number, sAge: number) {
    this.name = name
    this.age = age
    this.sAge = sAge
  }
}

//班级类 班级类应该包含若干个学生实例
class Class {
  //一个数组类型 其中包含若干学生类
  students: Array<Student>
  constructor(students: Array<Student>) {
    this.students = students
  }
}

let s1 = new Student("张三", 20, 5)
let s2 = new Student("李四", 20, 5)
let s3 = new Student("王二狗", 20, 5)
let c1 = new Class([s1, s2, s3])
console.log(s1.name)

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    get [Symbol.toStringTag]() {
        return "Person";
    }
    speak = () => {
        console.log(this.name + "在说话");
    }
}

let p1 = new Person("罗鹏", 25);
console.log(Object.prototype.toString.call(p1));
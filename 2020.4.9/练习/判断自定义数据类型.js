function Person(name, age){
    this.name = name;
    this.age = age;
    get [Symbol.toStringTag] = function() {
        return "Person";
    }
}
Person.prototype.speak = () => {
    console.log(this.name + "在说话");
}

let p1 = new Person("罗鹏", 25);
console.log(Object.prototype.toString.call(p1));
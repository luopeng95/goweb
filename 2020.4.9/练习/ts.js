function Person(){}
let p1 = new Person();
console.log(Person._proto_ === Person.prototype);
console.log(p1._proto_ === Person._proto_);
console.log(p1.prototype === Person.prototype);
console.log(p1.prototype === Person._proto_);
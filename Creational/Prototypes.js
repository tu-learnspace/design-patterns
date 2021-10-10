// prototypes: an encapsulation of properties that an object links to

// create constructor => just create a function
let Task = function (name){
    this.name = name;
    this.completed = false;
}
// drawbacks của Constructor pattern là mỗi lần task mới đc tạo thì hàm complete và save lại đc tạo với ý tưởng hoạt động như nhau (tốn kém)
// => thay vì như vậy nên tạo prototype để mỗi copy của object đó sẽ link đến (lôi complete và save ra quăng vào 1 chỗ chung)
// => xài Prototype: ClassName.prototype.methodName = function(arguments){}
Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

// create instances
let task1 = new Task('create a demo for constructors');
let task2 = new Task('create a demo for modules');
let task3 = new Task('create a demo for singletons');
let task4 = new Task('create a demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();
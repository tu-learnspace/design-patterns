// when you use the new keyword, it means:
// 1. create new object
// 2. links that object to an object prototype
// 3. binds 'this' to the new object scope
// 4. implicitly returns this
// => constructor pattern

// create constructor => just create a function
let Task = function (name){
    this.name = name;
    this.completed = false;
    
    this.complete = function () {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }
    this.save = function (){
        console.log('saving Task: ' + this.name);
    }
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
// Babel will transform this
let Task = function (name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function () {
    console.log('completing task: ' + this.name);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log('saving task: ' + this.name);
}

module.exports = Task

// to this
'use strict'    // ES6

class Task {
    constructor(name) {
        this.name = name;
        this.completed = false;
    }
    complete() {
        console.log('completing task: ' + this.name);
        this.completed = true;
    }

    save() {
        console.log('saving task: ' + this.name);
    }

}

module.exports = Task
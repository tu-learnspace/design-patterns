let task0 = {};
let task2 = Object.create(Object.prototype);

task0.title = 'My task';
task0.description = 'My description';
task0.toString = function(){
    return this.title + ' ' + this.description
}

// ====================================================
let task = {
    title: 'My task',
    description: 'My description'
};

Object.defineProperty(task, 'toString', {
    value: function (){
        return this.title + ' ' + this.description
    },
    writable: false,        // ngăn chặn việc gán trong JS
    enumerable: false,      // hide đi hàm toString ra ngoài
    configurable: false     // ko đc configure ở nơi khác
} );

task.toString = 'hi';               // writable = false ngăn chặn việc này xảy ra
console.log(task)                   // { title: 'My task', description: 'My description' }: ko thấy hàm toString (do enumerable chặn)
console.log(Object.keys(task))      // in ra [ 'title', 'description' ]
console.log(task.title)             // My task
console.log(task.toString())        // My task My description


// INHERITANCE ===========================================
let urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function (){
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
} );

console.log(urgentTask.toString())      // My task is urgent
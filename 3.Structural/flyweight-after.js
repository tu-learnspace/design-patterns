class Task{
    constructor(data) {
        // những thuộc tính non-unique sẽ được re-use lại nhờ flyweight
        this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
        this.name = data.name;      // thuộc tính unique nên không thể dùng flyweight để reuse được
        // this.priority = data.priority;
        // this.project = data.project;
        // this.user = data.user;
        // this.completed = data.completed;
    }
}

class Flyweight{  // tạo ra 1 flyweight dựa vào những thuộc tính non-unique
    constructor(project, priority, user, completed) {
        this.project = project;
        this.priority = priority;
        this.user = user;
        this.completed = completed;
    }
}

let FlyweightFactory = function (){
    let flyweights = {};    // hash map chứa các flyweight

    // tìm kiếm trong flyweights dựa vào props truyền vào
    // nếu ko tìm thấy thì thêm mới, còn ko thì trả ra flyweight tương ứng
    let get = function(project, priority, user, completed){
        if (!flyweights[project + priority + user + completed]){
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };

    let getCount = function (){
        let count = 0;
        for (let f in flyweights) count++;
        return count;
    };

    return {
        get: get,
        getCount: getCount
    };
}() // self-invoke

function TaskCollection(){
    let tasks = {};
    let count = 0;
    let add = function(data){
        tasks[data.name] = new Task(data);
        count += 1;
    }

    let printAll = function () {
        console.log(tasks['task1'])
        console.log(tasks['task2'])
        console.log(tasks['task3'])
    }

    let getCount = function (){
        return count;
    }

    return {
        add: add,
        getCount: getCount
    }
}

// ====================================================================================
let tasks = new TaskCollection()

let projects = ['none', 'course', 'training', 'project']
let priorities = [1, 2, 3, 4, 5]
let users = ['Joh', 'Nick', 'Amanda', 'Dung']
let completed = [true, false]

let initialMemory = process.memoryUsage().heapUsed;

// khởi tạo các task
for (let i = 0; i < 1000000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor((Math.random() * 5))],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)]
    })
}

let afterMemory = process.memoryUsage().heapUsed;

console.log('used memory ' + (afterMemory - initialMemory)/ 1000000 + ' MB for ' + tasks.getCount() + ' tasks.')
console.log('actual task created using flyweight: ' + FlyweightFactory.getCount())



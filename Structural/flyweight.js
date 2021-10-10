class Task{
    constructor(data) { // công việc khởi tạo 1 task
        this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);  // những thuộc tính non-unique ta sẽ reuse lại nhờ flyweight
        this.name = data.name; // thuộc tính duy nhất unique nên ta không thể dùng flyweight để reuse được
    }
}

class Flyweight{
    constructor(project, priority, user, completed) {   // tạo ra 1 flyweight dựa vào những thuộc tính non-unique
        this.project = project;
        this.priority = priority;
        this.user = user;
        this.completed = completed;
    }
}

let FlyweightFactory = function (){
    let flyweights = {};    // kho chứa tập hợp các flyweight
    // hàm này tìm kiếm trong tập flyweight dựa vào các thuộc tính truyền vào, nếu tìm thấy không tìm thấy thì thêm mới vào kho rồi trả ra flyweight tương ứng
    let get = function(project, priority, user, completed){
        if (!flyweights[project + priority + user + completed]){
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };

    let getCount = function (){  // hàm lấy số lượng các flyweight có trong kho
        let count = 0;
        for (let f in flyweights) count++;
        return count;
    }

    return{    // module pattern
        get: get,
        getCount: getCount
    }
}()

function TaskCollection(){      // nơi lưu trữ các task (ý tưởng giống object pool pattern)
    let tasks = {};
    let count = 0;
    let add = function(data){   // hàm tạo ra 1 task từ data và lưu trữ vào tasks
        tasks[data.name] = new Task(data)
        count += 1;
    }

    let getCount = function (){ // lấy số lượng task hiện tại
        return count;
    }

    return{         // module pattern
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



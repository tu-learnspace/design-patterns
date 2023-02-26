/**
 * làm đơn giản hóa việc khởi tạo object
 * tạo các object khác nhau dựa vào yêu cầu cần thiết tại từng thời điểm cụ thể
 *
 * vd hàm main ta có
 * thay vì cứ mỗi loại task lại import vào
 * const taskRepo = require('./taskRepository')
 * const userRepo = require('./userRepository')
 * const projectRepo = require('./projectRepository')
 */

// ta sẽ sử dụng Factory
const repoFactory = function () {
    this.getRepo = function(repoType){
        if(repoType === 'task'){
            const taskRepo = require('./taskRepository')
            return taskRepo
        }
        if(repoType === 'user'){
            const userRepo = require('./userRepository')
            return userRepo
        }
        if(repoType === 'project'){
            const projectRepo = require('./projectRepository')
            return projectRepo
        }
    }
}

// thay vì
const user = userRepo.method(1)
// sử dụng
repoFactory.getRepo('user').method(1)

// cải tiến


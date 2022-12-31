const {getAllTask,addTask,deleteTask,updateTask,getTask} = require('../controller/taskController');
const exprees = require('express');
const taskRoute=exprees.Router()

taskRoute.route("/").get(getAllTask).post(addTask)

taskRoute.route("/:id").get(getTask).delete(deleteTask).patch(updateTask)



module.exports=taskRoute
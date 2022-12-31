

const getAllTask=function(req,res){
return res.status(200).send({  
    status: 200,
    message: 'success to get all tasks',
    })
}





const getTask=function(req,res){
    return res.status(200).send({  
        status: 200,
        message: 'success to get  tasks',
        })
    }
    


const addTask=function(req,res){
    return res.status(200).send({  status: 200,
        message: 'success to add task',
        })
}



const deleteTask=function(req,res){
return res.status(200).send({  status: 200,
    message: 'success to delete task',
    })
}



const updateTask=function(req,res){
    return res.status(200).send({  status: 200,
        message: 'success to update task',
       })
}



module.exports={getAllTask,addTask,deleteTask,updateTask,getTask}
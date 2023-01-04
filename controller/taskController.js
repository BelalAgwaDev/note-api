const Task = require('../model/taskModel');
const LoggerServies = require('../services/logger');
const logger=new LoggerServies("taskController")

const getAllTask = async function (req, res) {
    try {
        const getAllTask = await Task.find({})
        logger.info("return all task",getAllTask)
        return res.status(200).send({
            status: 200,
            message: 'success to get all tasks',
            data: getAllTask
        })
    } catch (error) {
        return res.status(422).send({
            status: 422,
            message: error.message,
        })
    }
}





const getTask = async function (req, res) {

    try {
        const { id: taskId } = req.params
        const getTask = await Task.findOne({ _id: taskId })


        if (!getTask) {

            return res.status(422).json({
                status: 422,
                message: 'no task with id : ' + taskId,
            })

        }
        return res.status(200).send({
            status: 200,
            message: 'success to get  tasks',
            data: getTask
        })



    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: error.message,
        })
    }

}



const addTask = async function (req, res) {
    try {
        const task = await Task.create(req.body)
        return res.status(200).send({
            status: 200,
            message: 'success to add task',
            data: task
        })
    } catch (error) {
        logger.error("add task error ",error.message)
        return res.status(422).send({
            status: 422,
            message: error.message,
        })
    }

}



const deleteTask = async function (req, res) {


    try {
        const { id: taskId } = req.params
        const deleteTask = await Task.findByIdAndDelete({ _id: taskId })


        if (!deleteTask) {

            return res.status(422).json({
                status: 422,
                message: 'no task with id : ' + taskId,

            })

        }

        return res.status(200).send({
            status: 200,
            message: 'success to delete task',
            data: deleteTask
        })



    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: error.message,
        })
    }



}



const updateTask = async function (req, res) {
    try {
        const { id: taskId } = req.params
        const updateTask = await Task.findByIdAndUpdate(
            { _id: taskId }, req.body,
            { new: true, runValidators: true,})


        if (!updateTask) {

            return res.status(422).json({
                status: 422,
                message: 'no task with id : ' + taskId,

            })

        }

        return res.status(200).send({
            status: 200,
            message: 'success to update task',
            data: updateTask
        })



    } catch (error) {
        return res.status(500).send({
            status: 500,
            message: error.message,
        })
    }

}



module.exports = { getAllTask, addTask, deleteTask, updateTask, getTask }

var express = require('express')
const noteRouter = require('./route/noteRoute')
const taskRoute = require('./route/taskRoute');
const dotenv = require('dotenv').config();
const connectDb=require('./database/connection');
const app=express()
const port=3000


 app.use(express.json())




app.use("/api/v1/note",noteRouter)

app.use("/api/v1/task",taskRoute)








const start=async function(){
    try {
        await connectDb(process.env.DATABASE_URL)
        app.listen(port,()=>{
            console.log(`server start .............`);
        })

       

    } catch (error) {
        console.log(error);
    }
}



start()



var express = require('express')
var bodyParser = require('body-parser')
var cors=require("cors")
const noteRouter = require('./route/noteRoute')
const app=express()
const port=3000


 app.use(cors())


// // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
 app.use(bodyParser.json())




// use note route
app.use("/api/v1",noteRouter)



app.listen(port,()=>{
   
    console.log(`server start .............`);
})


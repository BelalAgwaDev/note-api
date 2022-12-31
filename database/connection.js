const mongoose = require('mongoose');



database_url="mongodb+srv://belalagwa:2468100@cluster0.selumet.mongodb.net/tasks?retryWrites=true&w=majority"



const connectDb=function(url){
    mongoose.connect(database_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    
    }).then((result) => {
        console.log("database is connected")
    }).catch((err) => {
        console.log(err)
    });
    
}





module.exports=connectDb
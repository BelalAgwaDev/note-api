var noteGeneratorId=require("../util/generator")
var noteModel=require("../model/note.model")
var memoryStorage=require("../util/memory.storage")





exports.getAllNotes=function(req,res){
    var seqId=noteGeneratorId.generate()
    memoryStorage.myStorage.setItem(seqId, '1st item');

    var seqId2=noteGeneratorId.generate()
    memoryStorage.myStorage.setItem(seqId2, '2nd item');

    var keys =memoryStorage.getKays(memoryStorage.myStorage)
    var values =memoryStorage.getValues(memoryStorage.myStorage)
    console.log(JSON.stringify(keys))


    var note=noteModel.note
    var noteObject= new note(seqId,"ccc","dddd","mmmmmm",new Date())
    res.send(JSON.stringify(noteObject))
}


exports.saveNotes=function(req,res){
    var seqId=noteGeneratorId.generate()
    var title=req.body.title
    var createdby="admin"
    var createdOn=new Date()
    var content=req.body.context
    if(!title || !content ){
        res.status(422).send({ error: 'Title and content not be empty' })
    }


    var note=noteModel.note
    var noteObject= new note(seqId,title,content,createdby,createdOn)


    res.send("save user..........")
}



exports.updateNotes=function(req,res){
    res.send("update user..........")
}



exports.deleteNotes=function(req,res){
    res.send("delete user..........")
}
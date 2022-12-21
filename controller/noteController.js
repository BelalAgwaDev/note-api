var noteGeneratorId = require("../util/generator")
var noteModel = require("../model/note.model")
var memoryStorage = require("../util/memory.storage")




//function  to get all notes dara
exports.getAllNotes = function (req, res) {

    //get data from memory storage
    var values = memoryStorage.getValues(memoryStorage.myStorage)
    // send request and send data
    return res.status(200).send({
        status: 200,
        message: 'success to git all data',
        data: JSON.stringify(values)
    })

}


exports.saveNotes = function (req, res) {
    // create general id
    var seqId = noteGeneratorId.generate()
    // body data request
    var title = req.body.title
    var content = req.body.content
    var createdby = "admin"
    var createdOn = new Date()
    
    // condation check title and content user enter or no
    if (!title || !content) {
        //send faileur response
        return res.status(422).send({
            status: 422,
            message: 'Title and content not be empty'
        })
    }

    // call note model 
    var note = noteModel.note
    //create new model from response
    var noteObject = new note(seqId, title, content, createdby, createdOn)
    memoryStorage.myStorage.setItem(seqId, noteObject);

    //send success response
    return res.status(200).send({
        status: 200,
        message: 'success to create note'
    })


}

exports.updateNotes = function (req, res) {
    // body data request
    var noteId = req.body.noteId
    var title = req.body.title
    var content = req.body.content
    var createdby = "admin"
    var createdOn = new Date()
    

  // condition check user enter id or no
    if (!noteId) {
        //send failuer response
        return res.status(422).send({
            status: 422,
            message: 'note id  not be empty'
        })
    }


 // condition check title and content user enter or no
    if (!title || !content) {
        //send failuer response
        return res.status(422).send({
            status: 422,
            message: 'Title and content not be empty'
        })
    }


    // get id from memory storage
    var idItem = memoryStorage.myStorage.getItem(noteId);
    //  condition check id find in memory storage
    if (!idItem) {
        //send failuer response
        return res.status(422).send({
            status: 422,
            message: 'ID is not exist'
        })
    }

    // call note model 
    var note = noteModel.note
     //update  note from response
    var noteObject = new note(noteId, title, content, createdby, createdOn)
    memoryStorage.myStorage.setItem(noteId, noteObject);

    //send success response
    return res.status(200).send({
        status: 200,
        message: 'success to update note'
    })
}



exports.deleteNotes = function (req, res) {
    // get id note from params
    var noteId = req.params.noteId
     
    //check user enter id
    if (!noteId) {
        //send failuer response
        return res.status(422).send({
            status: 422,
            message: 'note id not be empty'
        })


    }


   //get id from memory storage
    var idItem = memoryStorage.myStorage.getItem(noteId);
    if (!idItem) {
        //send failuer response
        return res.status(422).send({
            status: 422,
            message: 'ID is not exist'
        })
    }



   // remove item from memory storage
    memoryStorage.myStorage.removeItem(noteId);
    //send success response
    return res.status(200).send({
        status: 200,
        message: 'success to delete note'
    })

}
const express=require("express")
const noteController=require("../controller/noteController")
const route=express.Router()


route.get("/notes",noteController.getAllNotes)

route.post("/notes/save",noteController.saveNotes)

route.put("/notes/update",noteController.updateNotes)

route.delete("/notes/delete",noteController.deleteNotes)



module.exports=route
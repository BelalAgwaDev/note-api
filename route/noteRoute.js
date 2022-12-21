const express=require("express")
const noteController=require("../controller/noteController")
const route=express.Router()


route.get("/notes",noteController.getAllNotes)

route.post("/notes",noteController.saveNotes)

route.put("/notes",noteController.updateNotes)

route.delete("/notes/:noteId",noteController.deleteNotes)



module.exports=route
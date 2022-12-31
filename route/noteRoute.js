const express=require("express")
const noteController=require("../controller/noteController")
const route=express.Router()


route.get("/",noteController.getAllNotes)

route.post("/",noteController.saveNotes)

route.put("/",noteController.updateNotes)

route.delete("/:noteId",noteController.deleteNotes)



module.exports=route
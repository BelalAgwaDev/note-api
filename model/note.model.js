
//create class model from requset data

exports.note=class note{

constructor(noteId,title,context,createdby,createdOn){
    this.noteId=noteId
    this.title=title
    this.context=context
    this.createdby=createdby
    this.createdOn=createdOn
}
}
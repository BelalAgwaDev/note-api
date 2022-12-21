var sequential = require("sequential-ids");
 
//create general id indicration from 3 digit

var generator = new sequential.Generator({
  digits:3 ,
 
  restore: "000"
});


generator.start()

module.exports=generator
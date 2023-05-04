const { body, header, param, query } = require("express-validator");
const { validate } = require(".");
var  logger=require("../utils/log")(module);

/**
  Refer : https://express-validator.github.io/docs 
 **/

const CustomValidator=async(req,res,next)=>{
    
    await body("customfield")
        .custom(async (value) => {
        
            if(value===undefined ){
                throw new Error("Empty field")
            }   
            else{
                //logic for custom validators
               
            }
        })
        .run(req)
    next()
}
const FileValidator=async(req,res,next)=>{
    await body('filefieldname')     
   
        .custom(async(value,{req})=>{
            if(req.file===undefined ){
                throw new Error("Empty file")
            }  
            if(req.file.mimetype !== 'application/pdf')//define the type of the file 
            {
                throw new Error("Invalid file type") 
            }
            else if(Number(req.file.size)>(1024*1024)){
                throw new Error("File size exceeds the limit greater than 1MB")
            }
        })
        .run(req)
    next()


}
module.exports={
    FileValidator,
    CustomValidator
}

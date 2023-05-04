var logger = require("../../utils/log")(module);
const {containerClient}=require("../../utils/azureconfig");

const UploadFileToAzure=async(req,res)=>{
    try{
        const containername=""//set container name
        const blobname="";//create file unique name 
        const blockBlobClient = containerClient(containername).getBlockBlobClient(blobname);
        const data =req.file.buffer;//contents of the file
        await blockBlobClient.upload(data, data.length);
        
        //after uploading in azure blob storage update the blob name in the db table
        return res.status(200).send({message:"Added Successfully"});
    }
    catch(err){
        logger.error(err);
        return res.status(500).send({message:"Server Error"});
    }
}
module.exports={UploadFileToAzure}
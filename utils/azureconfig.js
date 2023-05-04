var logger=require("./log")(module);
const { BlobServiceClient } = require("@azure/storage-blob");
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;
if (!AZURE_STORAGE_CONNECTION_STRING) {
    logger.error('Azure Storage Connection string not found');
    return 
  }

const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

const  containerClient=(containerName)=>{
    return blobServiceClient.getContainerClient(containerName);
}

module.exports={containerClient}
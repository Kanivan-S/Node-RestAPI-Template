
var logger=require("../../utils/log")(module);

const bcrypt=require("bcrypt");
const saltRounds = 10 

const CreateAccount = async (req, res) => {
    
    try{
        //get details - check if it's already exists
        //create new entry with new details

        return res.status(200).send({message:"Success"});
    }
    catch (err) {
        logger.error(err);
        return res.status(500).send({message:"Server error"})
    }

}
module.exports = CreateAccount 

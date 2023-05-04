const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const {jwtDetails }= require("../../config/config")

var logger=require("../../utils/log")(module);

const Login = async (req, res) => {
    try{
        //implement login functionalities

        const data="";//fetch from database table
        
        const password=req.body.password 
       
        if(data){
            if(!data.iscreated)return res.status(400).send({message:"User not created!"});
            bcrypt.compare(password, data.password, function(err, result) {
                if(err){
                    return res.status(500).send({message:"Server Error"})
                }
                else{
                    if (result === true) {
                        const tokenData={role:"Role",id:"Id"}//set token data as per your logic

                        let token = jwt.sign(tokenData, jwtDetails.secret, {
                            expiresIn: jwtDetails.jwtExpiration,
                        });

                        return res.status(200).json({message:"Login success",accessToken:token,});
                    }
                    else{
                        return res.status(400).send({ message:{"Password":"Wrong Password"}})
                    }
                }
                });
        }
        else{
            return res.status(400).send({ message:"User not Found"})
        }
       
    }   
    catch(err){
        logger.error(err);
        return res.status(500).send({  message: "Server Error" });
    }
}


module.exports = Login 
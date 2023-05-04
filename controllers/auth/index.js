
const { verifyToken } = require("../../utils/token")
const login = require("./login")
const password = require("./password")
const signup = require("./signup")

const JWTVerify = async(req,res)=>{

    const token = req.headers.authorization 

    if(!token || token==="Bearer no_token") return res.status(401).send({message:"token required"})

    const data = verifyToken(token)

    if(data===null) return res.status(401).send({message:"invalid token"})

    return res.status(200).send({message:"token is valid",data})

}

module.exports = {
    login,
    signup ,
    password,
    JWTVerify 
}
var logger=require("../utils/log")(module);

const express=require('express')
const router=express.Router()
const auth=require('../controllers/auth')
const  authValidator=require("../validators/authValidator");
const { validate } = require("../validators/index");

router.head('/JWTVerify',auth.JWTVerify) ; 
 
//set routes for signup  

router.post(
  "/login",
  authValidator.loginValidator,
  validate,
  auth.login
);

router.post("/forgot-password", 
    authValidator.ForgotPasswordValidator,
    validate,
    auth.password.ForgotPassword,
  );

router.post("/set-password", 
    authValidator.SetPasswordValidator,
    validate,
    auth.password.SetPassword);



router.use(function(req, res, next) {
    return res.status(404).send({message:"Not Found"});
});

module.exports=router;

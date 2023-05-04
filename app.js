var logger=require("./utils/log")(module)
const express = require('express');
const app = express();
const cors=require('cors');
const con=require("./config/dbconnection")
const  utils=require('./utils');

app.use(cors());//update it when u integrate with frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// DB-Connection 
con.
  sync().
  then(() => {
    logger.info("Synced db.");
  })
  .catch((err) => {
    logger.error(err);
    logger.info("Failed to sync db: " + err.message);
  });


//allow login-signup routes without jwt Authorization
app.use('/api/auth', authroutes, (req,res,next)=>{
  return res.send(req.res) 
}); 

// Authorizing requests
app.use((req,res,next)=>{

  const token = req.headers.authorization 

  if(!token || token==="Bearer no_token") return res.status(401).send({message:"token required"})

  const data = verifyToken(token)

  //set locals
  if(data) next() 

  return res.status(401).send({message:"un-authorised , give me token!!"})

})




//add routes here




app.use(function(req, res, next) {
  return res.status(404)
});


app.listen(3001, (err) => {
  if (!err) logger.info("App Started!!")
  else logger.error("Error Starting") ;
})

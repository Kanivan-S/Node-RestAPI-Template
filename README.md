***Backend template for node-express api***

**Folder Structure**
./conifg
    - Database connection
    - mail transporter
    - JWT Details

./logs
    -created when server starts
    -log files

./models
    - Define schema of Database tables
    - Define schema Relationship

./utils
    -Utilies functions

./validators
    -Express-validators

./routes
    -handling routes

./controllers
    -business logic



**Features** :

->Logger   
   - when using logger , automatically create log files under logs for info,err...
        [location of the error and timestamp of the error generated]

->FileUpload  
    -Uploading File  to azure blob storage 

->Express-validators 
    - middleware for each request
    - example for default validators
    - example for custom validators

->Sequelize 
    - Reference to Sequelize 
    - define schema

->Sending mail 
    -Using Nodemailer send mail with gmail service

->Login-Signup functionalities 
    -set and verify JWT Token  
    -abstract code for login,signup,forgot-password and set-password
    -Password hash with bcrypt
    -sendVerificationlink to mail function 

->API Authorization 
    ->JWT Access Token


**ADD gitignore**
.env 

logs

node_modules

**commmand**
installing packages -> `npm install`
starting server -> `npm start`

while deploy -> change `nodemon app.js` to `node app.js` in package.json 
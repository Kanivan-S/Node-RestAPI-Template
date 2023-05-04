const {transporter}=require("../config/config");

const logger=require("../utils/log")(module);

const sendMail = async (html,subject,to) => {
    
    var mailOptions={
        to ,
        subject,  
        html 
    };

    transporter.sendMail(mailOptions, async (err, info) => {
        if (err) {logger.error(err);return false;}
    })
    return true;

}


module.exports = {
    sendMail
}
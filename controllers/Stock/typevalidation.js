let connection = require("../../config/db");

function Typevalidation (res,req){
    
connection.query("select typeValidation from article ",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Typevalidation;
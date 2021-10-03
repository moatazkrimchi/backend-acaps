let connection = require("../../config/db");

function Fourniture (res,req){
    
connection.query("select idfourniture id, nomFourniture from fourniture ",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Fourniture;
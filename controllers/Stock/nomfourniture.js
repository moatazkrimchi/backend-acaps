let connection = require("../../config/db");

function nomFourniture (res,req){
    
connection.query("select nomFourniture  from fourniture where idfourniture = ? ",[req.body.idfourniture],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = nomFourniture;
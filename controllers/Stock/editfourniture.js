let connection = require("../../config/db");

function Editfourniture (res,req){
    
connection.query("Update fourniture set nomFourniture = ? WHERE idfourniture = ?",[req.body.nomFourniture,req.body.idfourniture],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Editfourniture;
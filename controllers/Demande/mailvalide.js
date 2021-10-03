let connection = require("../../config/db");

function Mailvalide (res,req){
    
connection.query("select idDemande id,dateDemande,collaborateur from demande where idDemande=? ",[req.body.idDemande],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Mailvalide;
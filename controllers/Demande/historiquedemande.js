let connection = require("../../config/db");

function Historiquedemande (res,req){
    
connection.query("select idDemande id,dateDemande,collaborateur, etat, datevalidationrefus from demande ",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Historiquedemande;
let connection = require("../../config/db");

function Demandevalider (res,req){
    
connection.query("select idDemande id,dateDemande,collaborateur from demande where etat = 'encours' ",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Demandevalider;
let connection = require("../../config/db");

function Demandetraite (res,req){
    var username = req.query.username
connection.query("select idDemande id,dateDemande,etat,designation, observation, datevalidationrefus from demande where etat = 'validé' or etat = 'refusé' and collaborateur = ?",[username],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Demandetraite;


let connection = require("../../config/db");

function Demandeencours (res,req){
    var username = req.query.username
connection.query("select idDemande id,dateDemande,etat,designation from demande where etat = 'encours' and collaborateur=?",[username],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Demandeencours;
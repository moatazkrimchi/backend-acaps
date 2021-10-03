let connection = require("../../config/db");

function ConfirmerDemande (res,req){


    var idDemande = req.body.idDemande
    console.log(idDemande+"-----")
connection.query("UPDATE demande SET etat = 'confirmé' where idDemande=?",[idDemande],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = ConfirmerDemande;
let connection = require("../../config/db");

function RefuserDemande (res,req){


    var idDemande = req.body.idDemande
    var observation = req.body.observation
    

    console.log(idDemande+"-----")
    console.log(observation+"-----")
connection.query("UPDATE demande SET etat = 'refusé', observation = ? , datevalidationrefus = DATE(NOW())  where idDemande=?",[observation,idDemande],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = RefuserDemande;
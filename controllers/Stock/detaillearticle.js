let connection = require("../../config/db");

function Detaillearticle (res,req){
   
connection.query("select * from demande_artickes,demande where demande_artickes.idarticle=? and demande.etat='valide' and demande.idDemande=demande_artickes.idDemande",[req.body.idarticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else 
        console.log("select * from demande_artickes,demande where demande_artickes.idarticle=? and demande.etat='valide' and demande.idDemande=demande_artickes.idDemande",[req.body.idarticle])
        res.send(rslt)
    })
};

module.exports = Detaillearticle;
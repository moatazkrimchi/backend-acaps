let connection = require("../../config/db");

function Demande (res,req){
    var username = req.query.username
    console.log(username)
connection.query("select idDemande id,dateDemande,etat,designation from demande where collaborateur=?",[username],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Demande;
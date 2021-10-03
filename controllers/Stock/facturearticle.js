let connection = require("../../config/db");

function Facturearticle (res,req){
   
connection.query("select idhistoriquearticle id, prix, quantite, fournisseur, dateajout ,dateexp , idarticle from historiquearticle where idarticle=? ",[req.body.idarticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else 
        
        res.send(rslt)
    })
};

module.exports = Facturearticle;
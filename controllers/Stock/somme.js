let connection = require("../../config/db");

function Somme (res,req){
    
connection.query("SELECT sum(prix*quantite) as total from historiquearticle where idarticle = ?  ",[req.body.idarticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Somme;
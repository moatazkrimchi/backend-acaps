let connection = require("../../config/db");

function Editqte (res,req){
    
connection.query("Update demande_artickes set qte = ? WHERE id = ?",[req.body.qte,req.body.id],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Editqte;
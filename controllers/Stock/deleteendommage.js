let connection = require("../../config/db");

function Deleteendommage (res,req){
    
connection.query("Update article set endommage = 0 WHERE idArticle = ?",[req.body.idArticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Deleteendommage;
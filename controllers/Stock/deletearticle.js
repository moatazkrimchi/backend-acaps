let connection = require("../../config/db");

function Deletearticle (res,req){
    
connection.query("DELETE FROM article WHERE idArticle = ?",[req.body.idArticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Deletearticle;
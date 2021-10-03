let connection = require("../../config/db");

function Fournitureinf (res,req){
    
connection.query("select idArticle id, codeArticle, nom, quantite, fourniture  from article ",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Fournitureinf;
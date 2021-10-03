let connection = require("../../config/db");

function Article (res,req){
   
connection.query("select idArticle id, codeArticle, nom, quantite, typeValidation, seuilleMin, fournisseur, fourniture, endommage, seuilleAlerte, prix, entre, sortie  from article ",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Article;
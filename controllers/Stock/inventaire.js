let connection = require("../../config/db");

function Inventaire (res,req){
   
connection.query("select article.idArticle id, article.codeArticle, article.nom, article.quantite, article.typeValidation, article.seuilleMin, article.fournisseur, article.fourniture, article.endommage, article.seuilleAlerte, article.prix, article.entre, article.sortie, sum(historiquearticle.prix*historiquearticle.quantite) as total  from article, historiquearticle where   article.idArticle = historiquearticle.idarticle group by historiquearticle.idArticle",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Inventaire;
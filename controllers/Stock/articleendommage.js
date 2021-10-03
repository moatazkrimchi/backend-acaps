let connection = require("../../config/db");

function Articleendommage (res,req){
    
connection.query("select idArticle id, article.codeArticle, nom, article.quantite quantitestock, articleendomage.quantite quantiteendommage ,typeValidation, seuilleMin, fournisseur, fourniture, endommage, seuilleAlerte, photo, fichier  from article, articleendomage where endommage = 1 and article.codeArticle = articleendomage.codeArticle",(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Articleendommage;
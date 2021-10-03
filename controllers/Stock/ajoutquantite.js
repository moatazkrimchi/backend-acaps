let connection = require("../../config/db");

function Ajoutquantite (res,req){
    var listArticleDemande = req.body;
connection.query("Update article set quantite = quantite + ? ,entre = entre + ?, prix = ? , fournisseur = ? WHERE idArticle = ?",[listArticleDemande.quantite,listArticleDemande.quantite,listArticleDemande.prix,listArticleDemande.fournisseur,req.body.idArticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else {
            connection.query('insert into historiquearticle values(null,?,?,?,?,DATE(NOW()),?,?)',[listArticleDemande.prix,listArticleDemande.quantite,listArticleDemande.fournisseur,req.body.idArticle,req.body.dateexp,listArticleDemande.quantite],(err,rslt)=>{
                if(err) {
                    res.send({
                        error:true,
                        msg:err.message,
                    })
                }
            })
        }
    })
};

module.exports = Ajoutquantite;
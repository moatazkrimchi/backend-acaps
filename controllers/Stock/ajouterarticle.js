let connection = require("../../config/db");

function Ajouterarticle (res,req){
    var listArticleDemande = req.body;
    console.log(listArticleDemande)
    connection.query("insert into article values(null,?,?,0,null,?,?,null,0,0,0,?,null,null,null)",[listArticleDemande.codeArticle, listArticleDemande.nom, listArticleDemande.seuilleMin, listArticleDemande.seuilleAlerte, listArticleDemande.fourniture ],(err,rslt)=>{
        console.log(rslt)
        if(err) {
            res.send({
                error:true,
                msg:err.message,
            })

        }
        res.send({
            error:false,
            msg:"done",
        })
    })
};

module.exports = Ajouterarticle;


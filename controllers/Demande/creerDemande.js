let connection = require("../../config/db");

function creerDemande (res,req){
    var listArticleDemande = req.body.list;
    
        connection.query("insert into demande values(null,DATE(NOW()),?,?,?,?,'',null)",["encours",listArticleDemande[0].designation,"",listArticleDemande[0].collaborateur],(err,rslt)=>{
            if(err) res.send({
                error:true,
                msg:err.message,
            })
            else {
                var idDemande = rslt.insertId;
                listArticleDemande.map((item,i)=>{
                    connection.query('insert into demande_artickes values(null,?,?,?,?,null)',[idDemande,listArticleDemande[i].codeArticle,listArticleDemande[i].quantite,listArticleDemande[i].beneficier],(err,rslt)=>{
                        if(err) {
                            res.send({
                                error:true,
                                msg:err.message,
                            })
                        }
                    })
                })
            }
        })
};

module.exports = creerDemande;
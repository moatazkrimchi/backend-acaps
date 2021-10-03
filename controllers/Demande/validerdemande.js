let connection = require("../../config/db");

function ValiderDemande(res, req) {

    var idDemande = req.body.idDemande
    connection.query("UPDATE demande SET etat = 'validé' , datevalidationrefus = DATE(NOW())  where idDemande=? ", [idDemande], (err, rslt) => {
        if (err) {
            res.send({
                error: true,
                msg: err.message,
            })
        }
        else req.body.listArticles.map(async (ele, index) => {

            await connection.query("UPDATE demande_artickes SET validation = 'valide' where id = ? ", [ele], (err, rslt) => {
                if (err) {
                    res.send({
                        error: true,
                        msg: err.message,
                    })

                }
                else {
                    connection.query("select article.idArticle,demande_artickes.qte from article,demande_artickes where article.codearticle=demande_artickes.idarticle and demande_artickes.idDemande=? and demande_artickes.id=?", [idDemande,ele], (err, listArticle) => {
                        if (err) {
                            res.send({
                                error: true,
                                msg: err.message,
                            })
                        }else{
                            connection.query("SELECT * FROM database_acaps.historiquearticle where idarticle=? order by dateajout", [listArticle[0].idArticle],async (err, listFourn) => {
                                if (err) {
                                    res.send({
                                        error: true,
                                        msg: err.message,
                                    })
                                }else{
                                    var qte = listArticle[0].qte;
                                    var i=0;
                                    while(qte!=0 || i==listFourn.length){
                                        if(listFourn[i].dispo>qte){
                                            await connection.query("update database_acaps.historiquearticle set dispo=dispo-? where idhistoriquearticle=?", [qte,listFourn[i].idhistoriquearticle],(err,rslt)=>{})
                                            qte=0;
                                            await connection.query("update database_acaps.article set quantite=quantite-? where idarticle=?", [listArticle[0].qte,listArticle[0].idArticle],(err,rslt)=>{})
                                        }else{
                                            await connection.query("update database_acaps.historiquearticle set dispo=0 where idhistoriquearticle=?", [listFourn[i].idhistoriquearticle],(err,rslt)=>{})
                                            qte-=listFourn[i].dispo
                                            i++;
                                        }
                                    }
                                }
                            })
                        }
                    })

                }
            })
                                            

            /*console.log(ele)
            if (req.body.listArticles.length == index) res.send({
                error: false,
                msg: "Done",
            })*/
        })
    })
};

module.exports = ValiderDemande;

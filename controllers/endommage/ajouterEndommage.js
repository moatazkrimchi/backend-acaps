let connection = require("../../config/db");


function AjouterEndommage(res, req) {
    var codeArticle = req.body.codeArticle;
    var qteEndommage = req.body.qteEndommage;
    connection.query("select * from articleendomage where codeArticle=?", [codeArticle], (err, respp) => {
        if (respp.length == 0) {
            connection.query("insert into articleendomage values(null,?,?,concat(LAST_INSERT_ID()+1,'_photo.png'),concat(LAST_INSERT_ID()+1,'_doc.pdf'))", [qteEndommage, codeArticle], async (err, rslt) => {
                if (err) res.send({
                    error: true,
                    msg: err.message,
                })
                else {
                    await connection.query("UPDATE articleendomage SET photo=concat(?,'_photo.png') , fichier=concat(?,'_doc.pdf') WHERE (idarticleEndomage = ?)", [rslt.insertId,rslt.insertId,rslt.insertId], (err, respp) => { })
                    await connection.query("UPDATE article SET endommage = 1 WHERE (codearticle = ?)", [codeArticle], (err, respp) => { })
                    res.send({
                        err: false,
                        isUpdated:false,
                        id: rslt.insertId
                    })
                }
            })
        }else{
            connection.query("update articleendomage set quantite=quantite+? where codearticle=?", [qteEndommage, codeArticle], async (err, rslt) => {
                if (err) res.send({
                    error: true,
                    msg: err.message,
                })
                else {
                    res.send({
                        err: false,
                        id:respp[0].idarticleEndomage
                    })
                }
            })
        }
    })

};

module.exports = AjouterEndommage;
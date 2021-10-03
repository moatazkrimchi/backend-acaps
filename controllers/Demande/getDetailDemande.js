let connection = require("../../config/db");

function getDetailDemande (res,req){
    var ishistoriqueform = req.body.ishistoriqueform;
    var addreq = "";
    if(ishistoriqueform===true){
        addreq =  " and demande_artickes.validation='valide'"
    }
    
connection.query("select * from demande_artickes,article where demande_artickes.idDemande=? and article.codeArticle=demande_artickes.idArticle "+addreq,[req.body.idDemande],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = getDetailDemande;
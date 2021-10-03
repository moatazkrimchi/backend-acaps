let connection = require("../../config/db");

function Quantite (res,req){
    var nom ="";
    if(req.body.keyword!=undefined){
        nom=" where codeArticle='"+req.body.keyword+"'";
    }
    console.log("select codeArticle, nom, quantite, fourniture, typeValidation, seuilleMin   from article "+nom)
    
    
connection.query("select codeArticle, nom, quantite, fourniture, typeValidation, seuilleMin   from article "+nom,(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};


module.exports = Quantite;

let connection = require("../../config/db");

function ListArticle (res,req){
    var fourniture ="";
    if(req.body.keyword!=undefined){
        fourniture=" where fourniture='"+req.body.keyword+"'";
    }
    console.log("select codeArticle, nom, quantite, fourniture, typeValidation, seuilleMin   from article "+fourniture)
    
    
connection.query("select codeArticle, nom, quantite, fourniture, typeValidation, seuilleMin   from article "+fourniture,(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};


module.exports = ListArticle;

let connection = require("../../config/db");
function AutreArticle (res,req){
    
    connection.query("select username from responsablefourniture",(err,rslt)=>{
            if(err) res.send({
                error:true,
                msg:err.message,
            })
            else res.send(rslt)
        })
    };
module.exports = AutreArticle;

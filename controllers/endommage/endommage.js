let connection = require("../../config/db");


function Endommage (res,req){
    

connection.query("select * from articleendomage where codeArticle=?",[req.body.codeArticle],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Endommage;
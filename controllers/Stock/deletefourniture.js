let connection = require("../../config/db");

function Deletefourniture (res,req){
    
connection.query("DELETE FROM fourniture WHERE idfourniture = ?",[req.body.idfourniture],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Deletefourniture;
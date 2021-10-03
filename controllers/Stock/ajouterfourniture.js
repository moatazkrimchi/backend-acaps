let connection = require("../../config/db");


function Ajouterfourniture (res,req){
    var nomFourniture = req.body.nomFourniture

connection.query("insert into fourniture values(null,?,null)",[nomFourniture],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Ajouterfourniture;
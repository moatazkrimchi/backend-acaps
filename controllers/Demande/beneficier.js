let connection = require("../../config/db");
function Beneficier (res,req){
    
    connection.query("select username from collaborateur",(err,rslt)=>{
            if(err) res.send({
                error:true,
                msg:err.message,
            })
            else res.send(rslt)
        })
    };
module.exports = Beneficier;

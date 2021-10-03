let connection = require("../../config/db");

function Login (res,req){
    
    var username = req.body.username
    var password = req.body.password
    console.log(username,password)
connection.query("select * from users where username=? and password=? ",[username,password],(err,rslt)=>{
        if(err) res.send({
            error:true,
            msg:err.message,
        })
        else res.send(rslt)
    })
};

module.exports = Login;
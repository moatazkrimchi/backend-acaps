let connection = require("../../config/db");

function ArticleEditing(res, req) {
    var newEtat = "";
    var data = [];
    var attributs = Object.keys(req.body.data);
    attributs.map((ele,index)=>{
        if(index==attributs.length-1){
            newEtat += ele+"=?"
        }else{
            newEtat += ele+"=? , "
        }
        data = [...data,req.body.data[ele]]
    })
    data = [...data,req.body.codeArticle]
    
    connection.query("update article set " + newEtat + " where codeArticle=?",data, (err, rslt) => {
        if (err) res.send({
            error: true,
            msg: err.message,
        })
        else res.send(rslt)
    })
};

module.exports = ArticleEditing;
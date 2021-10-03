let connection = require("../../config/db");

function Ajouter (res,req){
    var idCollab = req.query.iduser
    var role = req.query.role

    if(role=="C"){
        connection.query("select username, direction from collaborateur where idCollaborateu=? ",[idCollab],(err,rslt)=>{
            if(err) res.send({
                error:true,
                msg:err.message,
            })
            else res.send(rslt)
        })
    }
    else if(role=="RF"){
        connection.query("select username, direction from responsablefourniture where idResponsableFourniture=?",[idCollab],(err,rslt)=>{
            if(err) res.send({
                error:true,
                msg:err.message,
            })
            else res.send(rslt)
        })
    }
    else if(role="RS"){
        connection.query("select username, direction from responsablestocck where idResponsableStocck=?",[idCollab],(err,rslt)=>{
            if(err) res.send({
                error:true,
                msg:err.message,
            })
            else res.send(rslt)
        })
    }
};

module.exports = Ajouter;
async function uploadFile(res, req) {

    //var idUser = req.body.idUser;
    var files = []
    Object.keys(req.files).map(ele => files = [...files, req.files[ele]])
    console.log(req.body)
    var id = req.body.id;
    try {
        var tmp = {
            photo: "",
            doc: "",
        }

        await files[0].mv("./assets/" + id + "_photo.png");
        tmp.photo = "http://localhost:3001/assets/" + id + "_photo.png"
        await files[1].mv("./assets/" + id + "_doc.pdf");
        tmp.doc = "http://localhost:3001/assets/" + id + "_doc.pdf"
        res.send({
            err: false,
            paths: tmp
        });
    } catch (err) {
        res.send({
            message: err.message.sqlMessage,
            error: true
        })
    }
};

module.exports = uploadFile;
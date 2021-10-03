const express = require('express');
const bodyParser= require('body-parser');
const fileUpload = require('express-fileupload');

const app = express();
const cors = require("cors");

const Login = require('./controllers/auth/login');
const Demande = require('./controllers/Demande/demande');
const Premier = require('./controllers/Demande/ajouterdemande');
const ListArticle = require('./controllers/Demande/listarticle');
const AutreArticle = require('./controllers/Demande/autrearticle');
const Fourniture = require('./controllers/Demande/fourniture');
const Quantite = require('./controllers/Demande/quantite');
const creerDemande = require("./controllers/Demande/creerDemande")
const Demandeencours = require("./controllers/Demande/demandeencours")
const Demandetraite = require("./controllers/Demande/demandetraite")
const getDetailDemande = require("./controllers/Demande/getDetailDemande");
const Demandevalider = require('./controllers/Demande/demandevalider');
const Historiquedemande = require('./controllers/Demande/historiquedemande');
const ValiderDemande = require('./controllers/Demande/validerdemande');
const ConfirmerDemande = require('./controllers/Demande/confirmerdemande');
const RefuserDemande = require('./controllers/Demande/refuserdemande');
const Article = require('./controllers/Stock/article');
const Typevalidation = require('./controllers/Stock/typevalidation');
const Ajouterarticle = require('./controllers/Stock/ajouterarticle');
const Ajouterfourniture = require('./controllers/Stock/ajouterfourniture');
const Beneficier = require('./controllers/Demande/beneficier');
const Deletearticle = require('./controllers/Stock/deletearticle');
const Ajoutquantite = require('./controllers/Stock/ajoutquantite');
const Deletefourniture = require('./controllers/Stock/deletefourniture');
const nomFourniture = require('./controllers/Stock/nomfourniture');
const Editfourniture = require('./controllers/Stock/editfourniture');
const Articleendommage = require('./controllers/Stock/articleendommage');
const Deleteendommage = require('./controllers/Stock/deleteendommage');
const Fournitureinf = require('./controllers/Stock/fournitureinf');
const Detaillearticle = require('./controllers/Stock/detaillearticle');
const Facturearticle = require('./controllers/Stock/facturearticle');
const Somme = require('./controllers/Stock/somme');
const Inventaire = require('./controllers/Stock/inventaire');
const Farticle = require('./controllers/Stock/farticle');
const Mailvalide = require('./controllers/Demande/mailvalide');
const uploadFile = require('./controllers/endommage/uploadfiles')
const AjouterEndommage = require("./controllers/endommage/ajouterEndommage");
const Endommage = require('./controllers/endommage/endommage');
const ArticleEditing = require("./controllers/Stock/articleEditing");
const Editqte = require('./controllers/Demande/editqte');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload());

//const port = process.env.PORT;
const port = 3001;



app.get("/assets/:path", (req, res) => {
    var filePath = __dirname+"/assets/"+req.params.path;
    res.download(filePath);
})

app.post("/upload", (request, response) => {
    uploadFile(response, request)
})


app.post("/ajouterEndommage", (request, response) => {
    AjouterEndommage(response, request)
})

app.post("/articleEditing", (request, response) => {
    ArticleEditing(response, request)
})



app.post("/auth/login",(request,response)=>{
    Login(response,request);
})


app.get("/demande",(request,response)=>{
    Demande(response,request);
})


app.get("/ajouterdemande",(request,response)=>{
    Premier(response,request);
})
app.post("/creedemande",(request,response)=>{
    creerDemande(response,request);
})

app.post("/detaildemande",(request,response)=>{
    getDetailDemande(response,request);
})


app.post("/listarticle",(request,response)=>{
    ListArticle(response,request);
})
app.post("/quantite",(request,response)=>{
    Quantite(response,request);
})

app.get("/autrearticle",(request,response)=>{
    AutreArticle(response,request);
})

app.get("/demandeencours",(request,response)=>{
    Demandeencours(response,request);
})
app.get("/demandetraite",(request,response)=>{
    Demandetraite(response,request);
})

app.get("/fourniture",(request,response)=>{
    Fourniture(response,request);
})

app.get("/demandevalider",(request,response)=>{
    Demandevalider(response,request);
})

app.get("/historiquedemande",(request,response)=>{
    Historiquedemande(response,request);
})
app.post("/validerdemande",(request,response)=>{
    ValiderDemande(response,request);
})
app.post("/confirmerdemande",(request,response)=>{
    ConfirmerDemande(response,request);
})
app.post("/refuserdemande",(request,response)=>{
    RefuserDemande(response,request);
})
app.post("/beneficier",(request,response)=>{
    Beneficier(response,request);
})
app.post("/mailvalide",(request,response)=>{
    Mailvalide(response,request);
})
app.post("/editqte",(request,response)=>{
    Editqte(response,request);
})






/* ... Gestion Stock ... */


app.get("/article",(request,response)=>{
    Article(response,request);
})
app.get("/typevalidation",(request,response)=>{
    Typevalidation(response,request);
})
app.post("/ajouterarticle",(request,response)=>{
    Ajouterarticle(response,request);
})
app.post("/ajouterfourniture",(request,response)=>{
    Ajouterfourniture(response,request);
})
app.post("/deletearticle",(request,response)=>{
    Deletearticle(response,request);
})
app.post("/ajoutquantite",(request,response)=>{
    Ajoutquantite(response,request);
})
app.post("/deletefourniture",(request,response)=>{
    Deletefourniture(response,request);
})
app.post("/nomfourniture",(request,response)=>{
    nomFourniture(response,request);
})
app.post("/editfourniture",(request,response)=>{
    Editfourniture(response,request);
})
app.get("/articleendommage",(request,response)=>{
    Articleendommage(response,request);
})
app.post("/deleteendommage",(request,response)=>{
    Deleteendommage(response,request);
})
app.post("/fournitureinf",(request,response)=>{
    Fournitureinf(response,request);
})
app.post("/detaillearticle",(request,response)=>{
    Detaillearticle(response,request);
})
app.post("/facturearticle",(request,response)=>{
    Facturearticle(response,request);
})
app.post("/somme",(request,response)=>{
    Somme(response,request);
})
app.post("/inventaire",(request,response)=>{
    Inventaire(response,request);
})
app.post("/farticle",(request,response)=>{
    Farticle(response,request);
})
app.post("/endommage",(request,response)=>{
    Endommage(response,request);
})











app.listen(port, ()=>{
    console.log('app running on port '+port);
})




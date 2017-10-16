const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

//** Initialize express ---------**
const app = express()

//** Port Numbers --------- */
const port = process.env.port || 8080

//** Initialize Middleware --------- */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

//Log requests to server console
app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

//** Endpoints ---------**

//** Server testing endpoints ---------**
app.get('/getTest',function(req,res){
    console.log('req');
    return res.status(200).send(`test successful`);
});

app.post('/postTest',function(req,res){
    console.log(req);
    return res.status(200).send(`test successful`);
});

app.put('/putTest',function(req,res){
    console.log(req);
    return res.status(200).send(`test successful`);
});

app.delete('/delTest',function(req,res){
    console.log('req');
    return res.status(200).send(`test successful`);
});

app.listen(port,()=>console.log(`Listening on port ${port}`));
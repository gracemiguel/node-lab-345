const express = require('express'); 
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); 
const port = 3002;
const app = express(); 
/*app.get("/", (request, response) =>{
    console.log(`URL: ${request.url}`);
    response.send({message: 'Node.js and Express REST API'}); 
}); */
routes(app); 
//Use Node.js body parsing middleware
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended:true,
}));

//Start the server
const server = app.listen(port, (error)=>{
    if(error) return console.log(`Error: ${error}`); 
    console.log(`Server listening on port ${server.address().port}`);
}); 


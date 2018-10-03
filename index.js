const express = require('express');
const app = express();

//create route with method get,post,put,delete,patch (request,response) res.send(return value)
app.get('/',(req,res) => {
    res.send({tes:"test"});
});
const PORT = process.env.PORT || 5000;
//with port to listen
app.listen(PORT);
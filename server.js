'use strict';

const AswerGenerator = require('./answer-generator');
const CompareNumber = require('./compare-number');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/',function (req,res) {
   const answer = AswerGenerator.generate();
   res.send(answer);
});


app.post('/test',function (req,res) {

   const result = CompareNumber.compare(req.body.input,req.body.answer);
   res.send(result);
});


app.listen(3000,function () {
   
   console.log('Example app listening on port 3000!');
});
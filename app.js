const express = require('express');
const app = express();
const chalk = require('chalk');

app.use(function(req,res,next){
  console.log(chalk.yellow("Your verb is " + req.method + ". And your url is " + req.url.statusCode))
  next();
})

app.get('/', function(req,res){
  res.send("You're at home");
})
app.get('/news',function(req,res){
  res.send("You're on news!")
})
app.listen(3000,function(){console.log('Server listening')})

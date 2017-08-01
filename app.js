const express = require('express');
const app = express();
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const routes = require('./routes');

let locals = {};

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
  console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

// app.use(function(req,res,next){ //MIDDLEWARE
//   console.log(chalk.yellow("Your verb is " + req.method + ". And your url is " + req.url))
//   next();
// })

app.use('/', routes);





app.listen(3000, function(){
  console.log('Server listening');
})

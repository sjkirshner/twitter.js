const express = require('express');
const app = express();
const chalk = require('chalk');
const nunjucks = require('nunjucks');

let locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};


nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
  console.log(output);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


app.use(function(req,res,next){
  console.log(chalk.yellow("Your verb is " + req.method + ". And your url is " + req.url))
  next();
})

app.get('/', function(req,res){
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );

})
app.get('/news',function(req,res){
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );

})


app.listen(3000, function(){
  console.log('Server listening');
})

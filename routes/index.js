const express = require('express');
const path = require('path');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function(req,res){
  res.sendFile(path.resolve(__dirname,'../public/stylesheets/style.css'));
})

router.get('/users/:name', function(req, res) {
  var name = ""+req.params.name;
  var list = tweetBank.find( {'name':name} );
  console.log(list)
  res.render( 'index', { tweets: list } );
});

module.exports = router;




// tweetBank.add('gabe', 'mindblown');

// console.log('list: ', tweetBank.list());

// console.log('find: ', tweetBank.find( {'name':'gabe'} ));
//returns array of objs

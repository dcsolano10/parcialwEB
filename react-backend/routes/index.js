"use strict";

var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://dianas:dianas@ds147034.mlab.com:47034/examen1";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log("connected");

		//Guardar numero de visitas
	  router.post('/rate', function (req, res) {
      var body = req.body;
      var col = db.collection('visitas');
      console.log(body);
      // var id = require('mongodb').ObjectID(body.id);
      col.findOne({"name" :body.name}).then(function (player) {
        console.log(player.score)
        player.score = player.score * player.numRatings;
        console.log(player.score)
        player.score = (player.score + parseInt(body.score));
        console.log(player.score);
        player.score = player.score / (player.numRatings + 1)
        console.log(player.score);
        player.numRatings = player.numRatings + 1;
        col.updateOne({"name" :body.name}, player).then(function (mongoError, ej2) {
          res.send(ej2);
        })
      })

    });

});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getFollowers/:user', function(req, res, next) {

var github = new GitHubApi({});
 
// TODO: optional authentication here depending on desired endpoints. See below in README.
 //req.params.user 
github.users.getFollowingForUser({
    username: req.params.user
  }, function(err, data) {
    console.log(req.params.user);
    res.json(data);
  });
});

module.exports = router;

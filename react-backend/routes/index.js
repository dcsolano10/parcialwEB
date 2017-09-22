"use strict";

var express = require('express');
var router = express.Router();
var GitHubApi = require("github");
var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://dianas:dianas@ds147034.mlab.com:47034/examen1";

MongoClient.connect(url, function(err, db){
	if(err) throw err;
	console.log("connected");

		//Guardar recomendaciones
	  router.post('/rate', function (req, res) {
	  	console.log("router")
      var body = req.body;
      var col = db.collection('visitas');
      console.log(body);
      // var id = require('mongodb').ObjectID(body.id);
      col.findOne({"login" :body.login}).then(function (user) {
        //console.log(user===null)
        if(user===null)
        {
        	col.insertOne({"login" :body.login, score: 1})
        }else{
        user.score = parseInt(user.score) + 1;
        //console.log(user.score)
        col.updateOne({"login" :body.login}, user).then(function (mongoError, ej2) {
          res.send(ej2);
        })
		}     
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

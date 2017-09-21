var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express testee' });
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

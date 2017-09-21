var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getFollowers/:user', function(req, res, next) {

var github = new GitHubApi({});

constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    var upperClass = this;
    axios.get('/getFollowers/' + this.state.value)
      .then(function (response) {
        upperClass.setPlayers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    <SearchBox onSearch={this.onSearch.bind(this), user={"req.params.user"}}</SearchBox>
  }
 
// TODO: optional authentication here depending on desired endpoints. See below in README.
 //req.params.user 
github.users.getFollowingForUser({
    username: "req.params.user"
}, function(err, data) {
    res.json(data);
});
});

module.exports = router;

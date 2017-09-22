import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AddFollowers from './Views/AddFollowers.js'


class App extends Component {

constructor(props) {
    super(props);
    this.state = {value: '', followers : [], breadcrumb : []};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  }

  setFollowers(followers) {
    console.log(followers)
        this.state.followers = followers
        this.render();
        this.forceUpdate();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        
    }

    handleSubmit(event) {
      //alert('An id was submitted: ' + this.state.value);
      this.state.breadcrumb.push({name:this.state.value})
      //console.log(this.state.breadcrumb)
      var upperClass = this;
      axios.get('/getFollowers/' + this.state.value)
        .then(function (response) {
          upperClass.setFollowers(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
      event.preventDefault();
  }

  render() {
    console.log(this.state.breadcrumb)
    if(this.state.value==='')
    {
        return (
    <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-10">
              <input type="text" className="form-control" value={this.state.value}
                      onChange={this.handleChange} placeholder="Type github id"/>
            </div>
            <div className="col-md-1">
              <input type="submit" className="btn btn-primary" value="Search follower"/>
            </div>
          </div>
        </form>

      </div>
            );
    }else{
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-10">
              <input type="text" className="form-control" value={this.state.value}
                      onChange={this.handleChange} placeholder="Type github id"/>
            </div>
            <div className="col-md-1">
              <input type="submit" className="btn btn-primary" value="Search follower"/>
            </div>
          </div>
        </form>
        <br/>
            <div className="row text-center">
            {this.state.breadcrumb.map((user, i) =>
            <h1 key={i}>{user.name}</h1>
            )}
          </div>
        <br/>
            <div className="row text-center">
                {this.state.followers.map((user, i) =>
                <AddFollowers key={i} avatar_url={user.avatar_url} login={user.login} html_url={user.html_url}/>
                )}
            </div>
      </div>
    );
    }
  }
}

export default App;

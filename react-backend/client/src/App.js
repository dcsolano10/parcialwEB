import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddFollowers from './Views/AddFollowers.js'


class App extends Component {

constructor(props) {
    super(props);
    this.state = {value: '', followers : [], breadcrumb : [], nextF:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    this.doParentToggle = this.doParentToggle.bind(this); 
  }

  doParentToggle(selec){
    //console.log(selec);
      this.setState({nextF: selec});
     //console.log(this.state.nextF.login);
     this.reSearch();
     this.render();
      this.forceUpdate();
   }

   reSearch()
   {
    this.state.breadcrumb.push({name:this.state.nextF.login})
      //console.log(this.state.breadcrumb)
      var upperClass = this;
      axios.get('/getFollowers/' + this.state.nextF.login)
        .then(function (response) {
          upperClass.setFollowers(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        });
   }

  setFollowers(followers) {
    //console.log(followers)
        this.setState({followers: followers});
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
    //console.log(this.state.breadcrumb)
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
                {this.state.next}
                {this.state.followers.map((user, i) => 
                <AddFollowers key={i} parentToggle={this.doParentToggle} avatar_url={user.avatar_url} login={user.login} html_url={user.html_url}/>
                )}
            </div>
      </div>
    );
    }
  }
}

export default App;

import React from 'react'
import '../App.css';
import '../PlayerStats.css';
import '../App.css';
import axios from 'axios';


class AddFollowers extends React.Component {

    constructor(props){
    super(props);
    this.doParentToggleFromChild = this.doParentToggleFromChild.bind(this);
    this.selec='';

   }

   doParentToggleFromChild(){ 
    console.log(this.props);
    var s=this.props;
      this.props.parentToggle(s);
   }

   handleSelectOption(e){
    console.log(this.props.login)
      var rate = {
        score: 1,
        login: this.props.login
      };
      axios.post('/rate', rate)
        .then(function (response) {

        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {

    return <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img className="card-img-top" src={this.props.avatar_url} alt="Profile pic"></img>
        <div className="card-body">
          <h4 className="card-title">{this.props.login}</h4>
          <br/>
          <a className="card-title" href={this.props.html_url}>Repository</a>
        </div>
        <div className="card-footer">
          {<button className="btn btn-primary" onClick={this.doParentToggleFromChild} >{this.props.text} Ver seguidores!</button>}
          <br/><br/>
          {<button className="btn btn-primary" onClick={this.handleSelectOption.bind(this)}>Recomendar</button>}
        </div>
      </div>
    </div>;
  }

}



export default AddFollowers;
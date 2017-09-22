import React from 'react'
import {Link} from 'react-router'
import '../App.css';
import '../PlayerStats.css';
import '../App.css';

class AddFollowers extends React.Component {
  render() {
    return <div className="col-lg-3 col-md-6 mb-4">
      <div className="card">
        <img className="card-img-top" src={this.props.avatar_url} alt="Profile pic"></img>
        <div className="card-body">
          <h4 className="card-title">{this.props.login}</h4>
        </div>
        <div className="card-footer">
          {/*<button >Find Out More!</button>*/}
        </div>
      </div>
    </div>;
  }
}



export default AddFollowers;
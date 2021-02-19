import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div className="box night rounded">
        <center>
          <div className="metal notched">
            <h1 className="title" id="welcome">Welcome, {this.props.store.user.username}!</h1>
          </div>
          <p>Your ID is: {this.props.store.user.id}</p>
          <div>
            <LogOutButton className="log-in btn" />
          </div>
        </center>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);

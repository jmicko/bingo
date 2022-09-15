import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'Get Bingo',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="container landing">

        {/* <div className=""> */}
        <div className="landing-intro">
          <h2>{this.state.heading}</h2>
          <p>
            Everybody needs some BINGO in their life!
          </p>
        </div>

        {/* LOGIN STUFF */}
        <div className="landing-login">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={this.onLogin}>
              Login
            </button>
          </center>

          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);

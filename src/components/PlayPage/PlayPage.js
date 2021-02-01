import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PlayPage.css'



class PlayPage extends React.Component {

  render() {
    return (
      <div>
        <p>Let's play BINGO!</p>
        <div className="board">
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(PlayPage);

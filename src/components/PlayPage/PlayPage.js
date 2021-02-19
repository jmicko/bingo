import { number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PlayPage.css'



class PlayPage extends React.Component {

  state = {
    numberList: []
  };

  componentDidMount() {
    this.props.dispatch({ type: 'UPDATE_NUMBERS' });
  }



  render() {
    return (
      <div>
        <div>
          <button>
            new card
          </button>
        </div>
        <center>
        <p>Let's play BINGO!</p>
        </center>
        <div className="board">
          <div className="bingo square">
            <p>BINGO</p>
          </div>
          {
            this.state.numberList.map((number, i) => {
              return (
                <div className="number square" key={i}>
                  <p>{number}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(PlayPage);

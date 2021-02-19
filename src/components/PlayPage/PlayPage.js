// import React, { Component } from 'react';
import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PlayPage.css'



class PlayPage extends React.Component {

  state = {
    numberList: []
  };
  
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_NUMBERS' });
  }
  
  newCard = () => {
    console.log("getting a new card");
    this.props.dispatch({ type: 'UPDATE_NUMBERS' });
  }


  render() {
    return (
      <div>
        <p>
          {JSON.stringify(this.props.store)}
        </p>
        <div>
          <button
          onClick={() => this.newCard()}
          >
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
            {this.props.store.numbers.numbers &&
          
            this.props.store.numbers.numbers.map((number, i) => {
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

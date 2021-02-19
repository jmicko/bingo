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
      <div
        className="rounded container night">
        <center className="notched metal box">
          <p className="bigHeader">Let's play BINGO!</p>
        </center>
        <div
          className="menu-hz">
          <button
            className="btn menu-hz-btn"
            onClick={() => this.newCard()}
          >
            new card
          </button>
        </div>
        <div
          className="box metal notched">
          <div className="board rounded">
            <div className="bingo square rounded">
              <p>BINGO</p>
            </div>
            {this.props.store.numbers.numbers &&

              this.props.store.numbers.numbers.map((number, i) => {
                return (
                  <div className="square" key={i}>
                    <p>{number}</p>
                  </div>
                )
              })

            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(PlayPage);

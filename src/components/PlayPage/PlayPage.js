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
    this.makeNumbers();
  }

  makeNumbers = () => {
    const number = [];
    for (let i = 0; i < 48; i++) {
      let rand = Math.floor(Math.random() * 100) + 1;
      number.push(rand)
      console.log(number);
    }
    this.setState({
      numberList: number
    })
  }

  render() {
    return (
      <div>
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

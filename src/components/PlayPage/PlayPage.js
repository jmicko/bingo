import { number } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PlayPage.css'



class PlayPage extends React.Component {

  state = {
    numberList: []
  };

  componentDidMount(){
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
        <p>Let's play BINGO!</p>
        <div className="board">
          {
            this.state.numberList.map((number) => {
              return(
                <p>{number}</p>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(PlayPage);

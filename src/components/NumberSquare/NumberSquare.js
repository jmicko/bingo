import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NumberSquare extends Component {
  state = {
    picked: false,
  };

  render() {
    return (

      this.state.picked
        ?
        <div className="square picked"
          onClick={() => this.setState({ picked: !this.state.picked })}>
          <p>{this.props.number}</p>
        </div>
        :
        <div className="square unpicked"
          onClick={() => this.setState({ picked: !this.state.picked })}>
          <p>{this.props.number}</p>
        </div>


    );
  }
}

export default connect(mapStoreToProps)(NumberSquare);

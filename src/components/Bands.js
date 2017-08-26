import React, { Component } from 'react';

class Bands extends Component {
  render(){

    const bands = this.props.store.getState().bands.map((band, index) =>
      <li>{band}</li>
    )

    return (
      <div>
        <h3>Bands:</h3>
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
};

export default Bands;

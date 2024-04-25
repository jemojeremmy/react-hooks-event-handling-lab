

// components/Keypad.js
import React from 'react';

class Keypad extends React.Component {
  handleChange = (event) => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input 
        type="password" 
        onChange={this.handleChange} 
      />
    );
  }
}

export default Keypad;

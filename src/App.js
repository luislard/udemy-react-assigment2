import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    count: 0
  }

  inputChangedHandler = (event) => {
    const textCount = event.target.value.length;
    this.setState({ count: textCount });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler}/>
        <ValidationComponent length={this.state.count} />
        <CharComponent length={this.state.count} />
      </div>
    );
  }
}

export default App;

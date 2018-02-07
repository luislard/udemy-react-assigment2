import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    count: 0,
    text: ''
  }

  inputChangedHandler = (event) => {
    const newText = event.target.value;
    const textCount = newText.length;
    this.setState({ count: textCount, text: newText });
  }

  render() {

    // prefered way to toggle persons
    let chars = null;

    if (this.state.text.length > 0) {
      let textArray = [];
      for (let index = 0; index < this.state.text.length; index++) {
        textArray[index] = this.state.text.charAt(index);
      }
      chars = (
        <div>
          {textArray.map((char, index) => {
            return <CharComponent key={index} char={char} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler}/>
        <ValidationComponent length={this.state.count} />
        {chars}
      </div>
    );
  }
}

export default App;

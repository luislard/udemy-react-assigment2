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

  deleteCharHandler = (charIndex) => {
    
    // const persons = this.state.persons; // this causes a flaw because we are pointing to the original state
    // const persons = this.state.persons.slice(); // this is a better solution because it copies the original state array
    const chars = [...this.state.text.slice('')]; // this is almost the same as before but with more modern syntax
    chars.splice(charIndex, 1); 
    this.setState({text: chars.join('')});
  }

  render() {

    // prefered way to toggle persons
    let chars = null;

    if (this.state.text.length > 0) {
      let textArray = this.state.text.split('');

      chars = (
        <div>
          {textArray.map((char, index) => {
            return <CharComponent 
              click={this.deleteCharHandler.bind(this, index)}
              key={index} 
              char={char} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangedHandler} value={this.state.text}/>
        <ValidationComponent length={this.state.count} />
        {chars}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

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
        <p className="count">{this.state.count}</p>
      </div>
    );
  }
}

export default App;

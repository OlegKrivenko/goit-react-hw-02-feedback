import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return <h1>Please leave feedback</h1>;
  }
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    console.log('CDM is running')
    axios
      .get('http://localhost:3000')
      .then(res => {
        this.setState({ friends: res.data })
        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>here it is</div>
        </header>
      </div>
    );
  }
}

export default App;

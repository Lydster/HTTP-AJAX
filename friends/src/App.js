import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendList from './components/FriendList'

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
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data)
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <FriendList 
          friends={this.state.friends}
          />
        </header>
      </div>
    );
  }
}

export default App;

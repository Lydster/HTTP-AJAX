import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendList from './components/FriendList'
import Form from './components/FriendForm'


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

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
      <header>
        <h1>Add Your Best Bud!</h1>
        <Form />
      </header>

        <div className="App-header">
          <FriendList 
          friends={this.state.friends}
          addFriend={this.addFriend}
          />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [
      { name: 'pradeep', hobby: 'coding' },
      { name: 'randy', hobby: 'wrestling' }
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value, hobby: 'coding' },
        { name: 'randy', hobby: 'wrestling' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react App</h1>
        <UserInput 
          name={this.state.users[0].name}
          changed={this.changeNameHandler} />
        <UserOutput
          name={this.state.users[0].name}
          hobby={this.state.users[0].hobby} />
        <UserOutput
          name={this.state.users[1].name}
          hobby={this.state.users[1].hobby} />
      </div>
    );
  }
}

export default App;

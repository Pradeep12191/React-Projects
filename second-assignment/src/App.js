import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {

  state = {
    text: 'Pradeep'
  }

  changeTextHandler = (event) => {
    console.log(event.target.value)
    this.setState({ text: event.target.value })
  }

  deleteTextHandler = (index) => {
    const text = this.state.text.split('');

    text.splice(index, 1);

    this.setState({ text: text.join('') });
  }

  render() {

    let chars = this.state.text.split('').map((c, index) => {
      return <Char 
              key={index} 
              c={c} 
              delete={() => this.deleteTextHandler(index)} />
    })

    return (
      <div className="App">
        <input type="text" onChange={this.changeTextHandler} value={this.state.text} />
        <p>{this.state.text}</p>
        <Validation length={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'asd', name: 'Pradeep', age: 20 },
      { id: 'afds', name: 'Randy', age: 20 },
      { id: 'afsas', name: 'Kane', age: 20 },
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 20 },
  //       { name: 'Randy', age: 20 },
  //       { name: 'Kane', age: 20 },
  //     ]
  //   })
  // }


  switchNameHandler(newName) {
    return (event) => {
      this.setState({
        persons: [
          { name: newName, age: 20 },
          { name: 'Randy', age: 20 },
          { name: 'Kane', age: 20 },
        ]
      })
    }

  }

  changeNameHandler = (id) => (event) => {
      const persons = [...this.state.persons];
      const peronIndex = this.state.persons.findIndex(p => p.id === id );
      const person = {...this.state.persons[peronIndex]}

      person.name = event.target.value;
      persons[peronIndex] = person;
      this.setState({ persons })
    }

  showPersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler(peronIndex) {
    return () => {
      const persons = [...this.state.persons];
      persons.splice(peronIndex, 1);
      this.setState({ persons: persons })
    }
  }

  render() {

    let persons = null;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    if (this.state.showPersons) {
      persons = (<div>{
        this.state.persons.map((p, index) => {
          return (
            <Person
              key={p.id}
              click={this.deletePersonHandler(index)}
              name={p.name}
              change={this.changeNameHandler(p.id)}
              age={p.age}>
            </Person>
          )
        })
      }</div>);
    }

    return (

      <div className="App">
        <button
          style={style}
          onClick={this.showPersonsHandler}>
          Show Person
        </button>
        {persons}
      </div>
    )
  }

}

export default App;
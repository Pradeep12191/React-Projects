import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'asd', name: 'Pradeep', age: 26 },
      { id: 'dfdfs', name: 'Krishna', age: 29 },
      { id: 'dfdsfs', name: 'Shriram', age: 29 }
    ],
    showPersons: false
  }

  // method 1
  switchNameHandler = (newName) => {
    console.log('Was Clicked !');
    return () => {
      this.setState({
        persons: [
          { name: newName, age: 26 },
          { name: 'Krishna', age: 29 },
          { name: 'Shriram', age: 30 }
        ]
      })
    }
  }

  switchNameHandler2 = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Krishna', age: 29 },
        { name: 'Shriram', age: 30 }
      ]
    })
  }

  changeNameHandler = (event, id) => {

    // find the person index with id 'id'

    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({ persons: persons });

  }

  showPersonHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons })
  }

  deletePersonHandler = (index) => {
    // update state in immutable fashion, 
    // get a copy of array in new reference using spread operator/ slice() method
    // const persons = this.state.persons.slice()
    const persons = [...this.state.persons]
    persons.splice(index, 1);
    this.setState({ persons });
  }

  render() {
    console.log('app component');
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'white'
      }
    }

    let persons = null;
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              key={person.id}
              changed={(event) => this.changeNameHandler(event, person.id)}
              age={person.age} />
          })}
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'white'
      }
    }

    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button style={style} onClick={this.showPersonHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a react app'))
  }


}

export default Radium(App);

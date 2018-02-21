import React from 'react';
import './Person.css';
import Radium from 'radium'

// Functional Components
const person = (props) => {
    console.log('person component');
    return (
        <div className="Person">
            <p onClick={props.click}>This is a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>

    );
}

export default Radium(person)
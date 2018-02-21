import React from 'react'
import './Person.css'

function Person(props) {
    return (
        <div className="person">
            <p onClick={props.click}>My name is {props.name}</p>
            <p>Age: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
}

export default Person


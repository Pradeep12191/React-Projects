import React from 'react';
import './Char.css';

const char = (props) => {

    return (
        <div onClick={props.delete} className="Char">{props.c}</div>
    )
}

export default char
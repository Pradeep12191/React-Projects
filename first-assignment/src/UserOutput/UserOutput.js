import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>I am {props.name}</p>
            <p>I love {props.hobby}</p>
        </div>
    )
}

export default userOutput
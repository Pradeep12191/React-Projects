import React from 'react';

const userInput = (props) => {
    const style={
        borderRadius:'10px',
        backgroundColor: '#eee',
        padding: '10px'
    }
    return (
        <input style={style} type="text" onChange={props.changed} value={props.name} />
    )
}

export default userInput
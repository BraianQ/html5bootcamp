import React from 'react';

function Input(props){
    return(
        <div className="Input">
            <label>{props.value}</label><br />
            <input type="text" onChange={props.handleChange} name={props.name}></input><br />
        </div>
    )
}

export default Input;
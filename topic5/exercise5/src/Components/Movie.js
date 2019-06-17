import React from 'react';

function Movie(props){
    if (props.value[3]){
        return(
            <div className="movie-card">
                <p className="movie">{props.value[0]}</p><button 
                onClick={() => {props.handleDelete(props.id)} } 
                className="LittleBTN">Delete</button>
            </div>
        )
    } else { 
        return null }
}

export default Movie;
import React  from 'react';

function Movie(props){
    return(
            <div className="movieform">
                <form onSubmit={props.handleSubmit}>
                    <label>Movie name</label><br />
                    <input 
                    type="text" 
                    className="movieinput" 
                    placeholder="Movie name"
                    onChange={props.handleMovieChange}
                    />
                    <br />
                    <label>Your name</label><br />
                    <input 
                    type="text" 
                    className="movieinput" 
                    placeholder="Your name" 
                    onChange={props.handleNameChange}
                    />
                    <br />
                    <label>Puntuation</label><br />
                    <select className="movieinput" onChange={props.handlePuntChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }

export default Movie;
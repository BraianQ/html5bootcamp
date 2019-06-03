import React, {Component} from 'react';

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            movie:'',
            name:'',
            puntuation:'',
            movies : []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMovieChange = this.handleMovieChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePuntChange = this.handlePuntChange.bind(this);

    }

    handleMovieChange(e){
        this.setState({movie: e.target.value});
    }

    handleNameChange(e){
        this.setState({name : e.target.value});
    }

    handlePuntChange(e){
        this.setState({puntuation : e.target.value});
    }

    handleClick(){
        let newmovie = [this.state.movie,this.state.name,this.state.puntuation];
        console.log(newmovie);
    }

    render(){
        return(
            <div className="movieform">
                <label>Movie name</label><br />
                <input 
                type="text" 
                className="movieinput" 
                placeholder="Movie name"
                onChange={this.handleMovieChange}
                />
                <br />
                <label>Your name</label><br />
                <input 
                type="text" 
                className="movieinput" 
                placeholder="Your name" 
                onChange={this.handleNameChange}
                />
                <br />
                <label>Puntuation</label><br />
                <select className="movieinput" onChange={this.handlePuntChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select><br />
                <button onClick={this.handleClick}>Save</button>
            </div>
        )
    }
}

export default Movie;
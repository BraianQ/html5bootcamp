import React , {Component} from 'react';

class Movie extends Component{
    render(){
        return(
            <div className="movie-card">
                <p className="movie">{this.props.value[0]}</p><button 
                onClick={() => {this.props.handleDelete(this.props.id)} } 
                className="LittleBTN">Delete</button>
            </div>
        )
    }
}

export default Movie;
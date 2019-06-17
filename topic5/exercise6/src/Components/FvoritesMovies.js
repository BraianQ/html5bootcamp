import React , { Component} from 'react';
import ListMovie from './ListMovie'

class FavoriteMovies extends Component{
    render(){
        return(
            <div>
                <ListMovie 
                movies={this.state.movies}
                handleDelete={this.handleDelete}
                />
            </div>
        )
    }
}

export default FavoriteMovies;
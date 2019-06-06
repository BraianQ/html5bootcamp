import React from 'react';
import ListMovies from './ListMovies'

function FavMovie(props){
    return(
        <div className="FavoriteMovie">
            <label>YourFavorite Movie</label>
            <ListMovies 
            fav={props.favmovie}
            />
        </div>
    )
}

export default FavMovie;
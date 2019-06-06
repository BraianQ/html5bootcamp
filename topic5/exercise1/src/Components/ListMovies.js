import React from 'react';
import Movieli from './Movieli';

function ListMovies(props){
        return(
            <div className="listM">
                {props.fav.map((movie , id) =>   
                <Movieli key={id} id={id} value={movie} />
                )}
            </div>
        )
}

export default ListMovies;
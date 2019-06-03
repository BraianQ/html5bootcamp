import React, {Component} from 'react';

class ListMovies extends Component{

    render(){
        return(
            <div className="listM">
                <ul>
                    {this.props.list.map((movie) => 
                        <li>{movie}</li>)}
                </ul>
            </div>
        )
    }
}

export default ListMovies;
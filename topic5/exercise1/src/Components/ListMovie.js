import React , {Component} from 'react';

class ListMovie extends Component{
    render(){
        return(
            <div className="List">
                    {this.props.movies.map((movie , id) =>
                    <p>{movie[0]}<br /></p>)}
            </div>
        )
    }
}

export default ListMovie;
import React , {Component} from 'react';
import Movie from './Movie'
class ListMovie extends Component{
    render(){
        return(
            <div className="List">
                <p>List of favorites movies : </p>
                {this.props.movies.map((movie , id) =>
                <Movie key={id} handleDelete={this.props.handleDelete} value={movie} id={id}/>)}
            </div>
        )
    }
}

export default ListMovie;
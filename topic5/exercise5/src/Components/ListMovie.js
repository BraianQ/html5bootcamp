import React , {Component} from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';
import {DELETE_MOVIE} from '../js/constants/action-types';

class ListMovie extends Component{
    
    handleDelete = (id) =>{
        this.props.deleteMovie(id);
    }

    render(){
        return(
            <div className="List">
                <p>List of favorites movies : </p>
                {this.props.movies.map((movie , id) => 
                <Movie key={id} handleDelete={this.handleDelete} value={movie} id={id}/>)}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteMovie: (id) => {dispatch({type: DELETE_MOVIE , id : id})}
    }
}

const mapStateToProps = (state) => {
    return{
      movies : state.movies
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMovie);
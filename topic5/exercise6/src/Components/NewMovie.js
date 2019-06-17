import React , { Component } from 'react';
import FormMovie from './FormMovie';

class NewMovie extends Component{

    constructor(props){
        super(props);
        this.state ={
        title : '',
        year : '',
        duration : '',
        favorite : false,
        movies : []
        }
    }

    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        if (name === "favorite"){
          this.setState({ favorite : !this.state.favorite})
        } else {
        this.setState({
            [name] : value
        }) 
        }
      }
    
      handleSubmit = (event) =>{
        event.preventDefault();
        let movie = [this.state.title, this.state.year , this.state.duration, this.state.favorite];
        let newmovies = this.state.movies;
        newmovies.push(movie);
        this.setState({movies : newmovies});
      }
    
        handleDelete = (id) => {
          let newmovies = this.state.movies;
          newmovies.splice(id, 1)
          this.setState({
            movies: newmovies,
          })
        }

    render(){
        return(
            <div className="FormMovie">
                <FormMovie 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default NewMovie;
import React , {Component} from 'react';
import './App.css';
import Movie from './Components/Movie'
import FavMovie from './Components/FavMovie';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      movie:'',
      name:'',
      puntuation:'',
      favmovie:[] ,
      movies:[]
    };
  }

  handleMovieChange = (event) => {
    this.setState({movie: event.target.value});
    console.log(event.target.value);

  } 

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
    console.log(event.target.value);

  }

  handlePuntChange = (event) => {
    this.setState({puntuation : event.target.value});
    console.log(event.target.value);
  } 

  handleSubmit = (e) => {
    e.preventDefault();
    let newmovies = this.state.movies;
    let createmov = [this.state.movie,this.state.name,this.state.puntuation];
    newmovies.push(createmov);
    this.setState({
      movies : newmovies
    })
    if (this.state.puntuation >= 4){
      newmovies = this.state.favmovie;
      newmovies.push(createmov);
      this.setState({favmovie: newmovies});
    }
  } 


  render(){
    return(
      <div className="App">
        <Movie 
        handleMovieChange={this.handleMovieChange} 
        handleSubmit={this.handleSubmit} 
        handlePuntChange={this.handlePuntChange}
        handleNameChange={this.handleNameChange}
        />
        <FavMovie
        handleFavMovieChange={this.handleFavMovieChange}
        favmovie={this.state.favmovie}
        />
      </div>
    )
  }
}

export default App;
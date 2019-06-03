import React , {Component} from 'react';
import './App.css';
import Movie from './Components/Movie'
import ListMovies from './Components/ListMovies'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      movies:[]
    };
    this.lookMovies = this.lookMovies.bind(this);
  }

  lookMovies(){
    console.log(this.state.movies);
  }

  render(){
    return(
      <div className="App">
        <Movie list={this.state.movies}/>
        <ListMovies list={this.state.movies} />
        <labe>See movies we have</labe>
        <button onClick={this.lookMovies}>look</button>
      </div>
    )
  }
}

export default App;
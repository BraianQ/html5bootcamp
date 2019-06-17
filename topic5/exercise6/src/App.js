import React , {Component} from 'react';
import './App.css';
import Home from './Components/Home';
import FavoritesMovies from './Components/FvoritesMovies';
import NewMovie from './Components/NewMovie';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom';

class App extends Component{

 
  

  render(){
    return(
      <Router>
        <div>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/CreateMovies">NEWS MOVIES</Link></li>
          <li><Link to="/Favoritesmovies">List Of Movies</Link></li>
          <Route exact path="/" component={Home} />
          <Route path="/Favoritesmovies" component={FavoritesMovies} />
          <Route path="/CreateMovies" component={NewMovie}/>
          </ul>
        </div> 
      </Router>
    )
  }
}

export default App;
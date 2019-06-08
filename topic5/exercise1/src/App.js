import React , {Component} from 'react';
import './App.css';
import FormMovie from './Components/FormMovie'
import ListMovie from './Components/ListMovie'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
        title : '',
        year : '',
        duration : '',
        movies : []
    }
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
        [name] : value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    let movie = [this.state.title, this.state.year , this.state.duration];
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
      <div className="App">
        <FormMovie 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        <ListMovie 
        movies={this.state.movies}
        handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App;
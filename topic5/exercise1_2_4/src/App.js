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
    console.log(this.state.title);
    console.log(this.state.year);
    console.log(this.state.duration);
    console.log(this.state.favorite);
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
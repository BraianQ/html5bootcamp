import React , {Component} from 'react';
import './App.css';
import Movie from './Components/Movie'

class App extends Component{
  render(){
    return(
      <div className="App">
        <Movie list = {this.state}/>
      </div>
    )
  }
}

export default App;
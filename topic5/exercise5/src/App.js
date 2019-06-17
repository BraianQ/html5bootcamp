import './App.css';
import React , {Component} from 'react';
import FormMovie from './Components/FormMovie'
import ListMovie from './Components/ListMovie'

class App extends Component {
  render(){
    return(
      <div className="App">
        <FormMovie />
        <ListMovie />
      </div>
    )
  }
}

export default App;
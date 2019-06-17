import React , {Component} from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import { ADD_MOVIE , DELETE_MOVIE} from '../js/constants/action-types';
import { deleteMovie } from '../js/actions';


class FormMovie extends Component{
    constructor(props){
        super(props);
        this.state ={
            title : '',
            year : '',
            duration : '',
            favorite : false,
            movie : []
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
        console.log(this.state.favorite);
        let newmovie = [this.state.title,this.state.year,this.state.duration,this.state.favorite];
        let newmovies = this.state.movie;
        newmovies.push(newmovie);
        this.setState({
            movie : newmovies
        })
        this.props.addMovie(this.state.movie);
        newmovies = [];
        this.setState({
            title : '',
            year : '',
            duration : '',
        })
    }

    render(){
        return(
            <div className="FormMovie">
                <p>Create your MOVIE</p>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                    value="Title"
                    name="title"
                    handleChange={this.handleChange}
                    />
                    <Input 
                    value="Year"
                    name="year"
                    handleChange={this.handleChange}
                    />
                    <Input 
                    value="Duration"
                    name="duration"
                    handleChange={this.handleChange}
                    />
                    <label>Is favorite : </label>
                    <input type="checkbox" name="favorite" onChange={this.handleChange}></input><br></br>
                    <button className="Button" type="submit">Create and Save</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addMovie: (payload) => {dispatch({type: ADD_MOVIE , payload : payload})}
    }
}
  

export default connect(null ,mapDispatchToProps)(FormMovie);
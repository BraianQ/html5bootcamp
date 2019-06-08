import React , {Component} from 'react';
import Input from './Input'

class FormMovie extends Component{
    render(){
        return(
            <div className="FormMovie">
                <p>Create your MOVIE</p>
                <form onSubmit={this.props.handleSubmit}>
                    <Input 
                    value="Title"
                    name="title"
                    handleChange={this.props.handleChange}
                    />
                    <Input 
                    value="Year"
                    name="year"
                    handleChange={this.props.handleChange}
                    />
                    <Input 
                    value="Duration"
                    name="duration"
                    handleChange={this.props.handleChange}
                    />
                    <button className="Button">Create and Save</button>
                </form>
            </div>
        )
    }
}
export default FormMovie;
import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    ageHandler = () => {
        this.setState({ age: this.props.age +  1 });
    }
    
    render(){
        const { firstName, lastName, hairColor } = this.props;

        return(
            <>
            <h1 className="red">My name is { firstName } { lastName }</h1>
            <h2>I am { this.state.age } years old </h2>
            <button onClick={ this.ageHandler }>Get older</button>
            <h3> My hair color is { hairColor }</h3>
            <br></br>
            </>
        )
    }
}

export default PersonCard;
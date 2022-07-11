import React, { Component } from 'react';
class Lightswitch extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            position: "On"
        };
    }

    lightSwitchHandler = () => {
        if( this.state.position === "On" ) {
            this.setState({ position: "Off" });
        } else {
            this.setState({ position: "On" });
        }
    }

    render(){
        return(
            <fieldset>
                <p>The lightswitch is currently { this.state.position }</p>
                <button onClick={ this.lightSwitchHandler }>Flip Switch</button>
            </fieldset>
        )
    }
}

export default Lightswitch
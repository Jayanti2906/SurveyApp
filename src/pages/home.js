import React, { Component } from 'react'


class home extends Component {
    
    render() {
        const { state } = this.props.location
        console.log({state})
        return (
            <div>
                <h1>Welcome {state.person}</h1>
            </div>
        )
    }
}

export default home;

import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {

        return this.state.isLoggedIn && <div>Welcome Raphael</div>

        // return this.state.isLoggedIn ? (
        //     <div>Welcome Raphael</div>
        // ) : (
        //     <div>Welcome guest</div>
        // )

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Raphael</div>
        // } else {
        //     message = <div>Welcome guest</div>
        // }
        // return <div>{message}</div>

        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Raphael</div>
        // } else {
        //     return <div>Welcome guest</div>
        // }
    }
}

export default UserGreeting
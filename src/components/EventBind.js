import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'Goodbye'
        })
    }

    clickHandlerArrow = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <div><button onClick={this.clickHandler}>Click with constructor bind (slow on start)</button></div>
        <div><button onClick={() => this.clickHandler()}>Click with arrow function (easiest to pass params)</button></div>
        <div><button onClick={this.clickHandlerArrow}>Click with class property</button></div>
      </div>
    )
  }
}

export default EventBind
import React, { Component } from 'react'
import Dialog from './Dialog'

export class SignUpDialog extends Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
         login: ''
      }
    }
    handleChange(e){
        this.setState ({
            login : e.target.value
        })
    }
    handleClick(){
        alert(`Welcome aboard, ${this.state.login}!`);
    }
  render() {
    return (
      <Dialog title="Mars Exploration Program"
      message="How should we refer to you?">
        <input onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Sign Up</button>
      </Dialog>
    )
  }
}

export default SignUpDialog

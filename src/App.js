import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    userInput:''
  }
  changeHandler = (ev) =>{
    this.setState({
      userInput:ev.target.value
    })
  }
  render() {
    return (  
      <div className="App">
            <header className="App-header">
                <input type="text" onChange={this.changeHandler} />
                <p >{this.state.userInput}</p>
            </header>
          </div>
    )
  }
}

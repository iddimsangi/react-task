import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';
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
    const chList = this.state.userInput.split('').map(ch =>{
      return <Char character={ch}/>
     })
    return (  
      <div className="App">
             <header className="App-header">
                <input type="text" onChange={this.changeHandler} />
                {/* <p >{this.state.userInput}</p> */}
                <Validation inputLength={this.state.userInput.length} />
                {chList}
             </header>
      </div>
    )
  }
}

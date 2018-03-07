import React, { Component } from 'react';

import './App.css';
import Character from './Character/Character';
import Validation from './Validation/Validation';

class App extends Component {
  state = {
    text : ''
  }

  onChangeHandler = (event) => {
    this.setState({
      text : event.target.value
    })
  }

  deleteOnClickHandler = (index) => {
    const charArr = [...this.state.text];
    console.log(index);
    console.log(charArr);
    charArr.splice(index,1);
    const word = charArr.join('')
    this.setState({
       text : word
    })

 }

  render() {
    const style = {
      margin : '16px',
      padding : '16px'
    }
  

    let char = (
      <div> 
      {
        this.state.text.split('').map((ch,index) => {
        return  <Character key={index} char={ch} click={() => this.deleteOnClickHandler(index)}/>
        })
      }
      </div>
    ) 

    return (
      <div className="App">
        <input type='text' style= {style} onChange={(event) => this.onChangeHandler(event)} 
        value={this.state.text}/>
        <Validation text={this.state.text} />
        {char}
        
      </div>
    );
  }
}

export default App;

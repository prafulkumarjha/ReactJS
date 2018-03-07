import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';

class App extends Component {

state = {
    persons : [
      {name:'Max', age:28},
      {name:'Manu', age:32},
      {name:'Stephanie', age:26}
    ]
};

switchNameHandler = () => {
  console.log('was clicked!!');
  this.setState({
    persons : [
      {name:'Maximillian', age:28},
      {name:'Manu', age:32},
      {name:'Stephanie', age:27}
    ],
    showPerson : false
});
}
 togglePersonHandler = () => {
//const doesShow = this.state.showPerson;
  this.setState({
    showPerson : !this.state.showPerson
  })
}

nameChangeHandler = ( event ) => {

  this.setState({
    persons : [
      {name:'Max', age:28},
      {name:event.target.value, age:32},
      {name:'Stephanie', age:26}
    ]
  });

}
  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor: 'pointer'
  };

  let person = null;
  if(this.state.showPerson) {
    person = (
<div>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler} changed={this.nameChangeHandler}> and my hobby is Racing </Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler}/>
       </div>
    )
  }

    return (
      <div className="App">
       <h1>Hi, I am a react app!!! </h1>
       <p>This really is working....!!! </p>
       <button style={style} onClick={this.togglePersonHandler}>Toogle Person </button>
       
       {person}
       
      </div>
    );

    
  }
}

export default App;

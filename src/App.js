import React, { Component } from 'react';
/*
import logo from './logo.svg';  ==> deleting logo.svg file as not needed */
import './App.css';
import MyPerson from './Person/Person';
import PersonProp from './Person/Person_Props';

class App extends Component {

  state = {
    persons:[
      {name:'Max' , age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:26}
    ]
  }

switchNameHandler = (newName) => {
  console.log('Button Clicked !!! ');
  this.setState({
    persons:[
      {name: newName, age:28},
      {name:'Manu' , age:29},
      {name:'Stephanie' , age:27}
    ]
  })
}

nameChangedHandler = (event) => {
  this.setState({
    persons:[
      {name: 'Max', age:28},
      {name:event.target.value , age:29},
      {name:'Stephanie' , age:26}
    ]
  })
}

  render() {
    return (
      <div className="App">  
      <h1> Hi, I am a React App </h1>
      <h2> =================== </h2>
      <MyPerson/>
      <MyPerson/>
      <h2> =================== </h2>
      <PersonProp name="Max" age="28" />
      <PersonProp name="Stephnaie" age="26" />
      <h2> ==================== </h2>
      <PersonProp name="Manu" age="29">  </PersonProp>

<h2> ==================== </h2>
<h2> Using State </h2>

<PersonProp 
name={this.state.persons[0].name} 
age={this.state.persons[0].age} />


<PersonProp 
name={this.state.persons[1].name} 
age={this.state.persons[1].age} 
click={this.switchNameHandler.bind(this,'Max !!')}
changed={this.nameChangedHandler}
> My Hobby : Racing
</PersonProp>

<PersonProp 
name={this.state.persons[2].name} 
age={this.state.persons[2].age} />

<button onClick={this.switchNameHandler.bind(this,'Maximilian')}>Switch Names
</button>
      </div>
    );
  }
}

export default App;

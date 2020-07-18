import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './containers/Blog/Blog';

// Always capitalize the first letter of a Component's name. 
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Blog from './containers/Blog/Blog';

function App() {
  
  const [ userOutputState, setUserOutputState ] = useState({
    users: [
      {name: "Caneyus"},
      {name: 'Pichacon'}
    ] 
  });
  
  const switchTextHandler = (event) => {
    console.log("switchTextHandler was called");
    // setPersonsState will not merge but instead it will replace the "state" with its argument.
    setUserOutputState ({ users: [
      { name: event.target.value},
      { name: event.target.value}
    ] });
  }
  return (
    <div className="App">
      <UserOutput userName={userOutputState.users[0].name}/>
      <UserOutput userName={userOutputState.users[1].name}/>
      <UserInput value={userOutputState.users[0].name} change={switchTextHandler}/>
      <Blog/>
    </div>
  );
}

export default App;

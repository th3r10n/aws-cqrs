import React from 'react';
// We can also import this CSS from the main App component.
import './UserInput.css'

const userInput = (props) => {
    //const age = Math.floor(Math.random() * 30);
    const style = {
        backgroundColor: 'red',
        border: '2px solid blue'
    };

return (
    <div style={style} className="UserInput">
        <input type="text" value={props.value} onChange={props.change}/>
    </div>
);

    
  }
  
  export default userInput;
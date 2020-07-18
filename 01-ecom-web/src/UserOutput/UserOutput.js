import React from 'react';
// We can also import this CSS from the main App component.
import './UserOutput.css'

const userOutput = (props) => {
    //const age = Math.floor(Math.random() * 30);
return (
    <div className="UserOutput">
        <p>{props.userName} is a hell of a guy.</p>
        <p>Who you gonna call? {props.userName}</p>
    </div>
);

    
  }
  
  export default userOutput;
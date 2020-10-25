import React, { Component } from 'react';
import './App.css';
import Products from './Products/Products';
import Orders from './Orders/Orders';
//import '../assets/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Always capitalize the first letter of a custom Component's name. 
class App extends Component {
  
  render() {
    return (
      <div className="tab-content">
        <Products/>
        <br/>
				<br/>
				<hr/>
        <Orders/>
      </div>
    );
  }
  
  
  
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: '',
    }
  }

  colorChange = (event) => {
   this.setState({color: event.target.value})
  }

  render(){
  return (
    <div className="App">
     <select 
      value={this.state.color}
      onChange={this.colorChange}
      >
        <option>--Select a Color--</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>

      </select>
    </div>
  );
}
}

export default App;

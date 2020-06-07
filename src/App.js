import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

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

  blockClicked = (event) => {
    event.target.style.backgroundcolor = this.state.color;
  };

  render(){
  return (
    <div className="App">
{/*
      <table>
      <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
      </table>

*/}
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

      <Table currentColor={this.state.color}/>

    </div>
  );
}
}

export default App;

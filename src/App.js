import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: '',
      rows: 1,
      columns: 1
    }

        //fixes setState DNE error
        this.addColumn = this.addColumn.bind(this);
        this.addRow = this.addRow.bind(this);
  }

  addColumn(){//Increment size of columns value

    this.setState({
        columns: this.state.columns + 1
        
    })
    console.log(this.state.columns);

 }

 addRow(){ //Increment size of rows value
 
     this.setState({rows: this.state.rows + 1})
     console.log(this.state.rows);
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

      <button onClick={this.addRow}>Add Row</button>
      <button onClick={this.addColumn}>Add Column</button>

      <Table currentColor={this.state.color} rows={this.state.rows} columns={this.state.columns}/>

    </div>
  );
}
}

export default App;

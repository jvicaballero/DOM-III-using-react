import React, {Component} from 'react';
import TableRow from "./TableRow"

//only use bind whenever you need to use the this keyword in ur function logic

class Table extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
             rows: 1, columns: 1, color: this.props.currentColor,
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

    render(){
        let displayTable = [];

        for(let i = 0; i < this.state.rows; i++)
            {
                displayTable.push(<TableRow 
                    columns={this.state.columns} 
                    color={this.state.color}
                    />)
            }
           

    return(
      

        <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>

        <table>
            <tbody>
                {displayTable}
            </tbody>
        </table>
        </div>
        
        )


}
}

export default Table
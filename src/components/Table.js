import React, {Component} from 'react';
import TableRow from "./TableRow"

//only use bind whenever you need to use the this keyword in ur function logic

class Table extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
             rows: this.props.rows, columns: this.props.columns, color: this.props.currentColor,
        };
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
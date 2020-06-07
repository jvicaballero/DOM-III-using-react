import React, {Component} from 'react'
import TableCell from "./TableCell";

class TableRow extends Component {
    
    
    render()
    {
        let colsArray = [];
        for(let i = 0; i < this.props.columns; i++)
            {
                colsArray.push(<TableCell  color={this.props.color} />)
            }

        return (
            <tr>{colsArray}</tr>
        )
    }
}

export default TableRow;
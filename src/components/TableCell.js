import React , { Component } from "react"

class TableCell extends Component{
 
    render()
    {
        let display = (
            <td value={this.props.color}></td>
        )
        return(
            <>
            {display}
            </>
        )
    }
}

export default TableCell
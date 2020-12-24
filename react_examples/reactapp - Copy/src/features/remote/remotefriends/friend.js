import Axios from 'axios';
import React from 'react'



class Friend extends React.Component {
    
    captureIdForDelete=()=>{
        this.props.delId(this.props.id)
    }

    captureIdForEdit=()=>{
        this.props.editId(this.props.id)
    }
    
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.nm}</td>
                <td>{this.props.un}</td>
                <td>{this.props.yr}</td>
                <td>
                    <button onClick={this.captureIdForEdit}>Edit</button>
                </td>
                <td>
                    <button onClick={this.captureIdForDelete}>Delete</button>
                </td>
            </tr>
         );
    }
}
 
export default Friend;
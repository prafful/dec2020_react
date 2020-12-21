
import React from 'react'
import { Link } from 'react-router-dom'



class Friend extends React.Component {
    
    captureIdForDelete=()=>{
        this.props.delId(this.props.id)
    }


    
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.nm}</td>
                <td>{this.props.un}</td>
                <td>{this.props.yr}</td>
                <td>
                    <button>
                    <Link to={{
                                pathname:'/editfriend',
                                data: this.props.id
                            }}>Edit</Link></button>
                </td>
                <td>
                    <button onClick={this.captureIdForDelete}>Delete</button>
                </td>

            </tr>
         );
    }
}
 
export default Friend;
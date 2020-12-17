import React from 'react'



class Friend extends React.Component {
    state = {  }
    render() { 
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.un}</td>
                <td>{this.props.nm}</td>
                <td>{this.props.yr}</td>
                <td>
                    <button>Edit</button>
                </td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
         );
    }
}
 
export default Friend;
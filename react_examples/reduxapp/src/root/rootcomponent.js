import React from 'react'
import Detail from '../containers/frienddetail'
import FriendList from '../containers/friendlist'

class SuperRootComponent extends React.Component {
  
    render() { 
        return ( 
            <div>
                <h1>Root Component</h1>
                <FriendList></FriendList>
                <hr></hr>
                <Detail></Detail>
            </div>
         );
    }
}
 
export default SuperRootComponent
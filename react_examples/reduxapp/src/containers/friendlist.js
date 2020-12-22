import React from 'react'
import { connect } from 'react-redux';

class FriendList extends React.Component {
   
    componentWillMount(){
        console.log("Log the props in FriendList container...")
        console.log(this.props)
    }

    renderFriends=()=>{
        return this.props.friends.map(friend=>{
            return (
                <li key={friend.id}>{friend.name}</li>
            )
        })
    }

    render() { 
        return ( 
            <div>
                <h3>Friend list....</h3>
                <ol>
                    {this.renderFriends()}
                </ol>
            </div>
         );
    }
}

function convertStoreToPorpsForFriendList(store){
    console.log("Store received in FriendList....")
    console.log(store)
    return {
        friends: store.allfriends
    }
}

 
export default connect(convertStoreToPorpsForFriendList)(FriendList)
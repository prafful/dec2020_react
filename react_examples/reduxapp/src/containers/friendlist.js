import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import friendClickedAction from '../actions/action-friendclicked';

class FriendList extends React.Component {
   
    componentWillMount(){
        console.log("Log the props in FriendList container...")
        console.log(this.props)
    }

    renderFriends=()=>{
        return this.props.friends.map(friend=>{
            return (
                <li key={friend.id}
                    onClick={()=>this.props.friendClicked(friend)}    >
                    {friend.name}
                </li>
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

function convertStoreToPorpsForFriendList(globalstore){
    console.log("Store received in FriendList....")
    console.log(globalstore)
    return {
        friends: globalstore.allfriends
    }
}

function convertEventsToPropsForFriendList(dispath){
    return bindActionCreators({
        friendClicked:friendClickedAction
    }, dispath)
}

 
export default connect(convertStoreToPorpsForFriendList, convertEventsToPropsForFriendList)(FriendList)
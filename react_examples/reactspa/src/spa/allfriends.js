import React from 'react'
import axios from 'axios'
import Friend from './friend'

class AllFriends extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           friends: []
            
        }
    }
    componentWillMount(){
        this.getRemoteFriends()
    }

    getRemoteFriends=()=>{
        axios.get("http://localhost:1234/friendsapp")
                .then(response=>{
                    console.log(response)
                    console.log(response.data)
                    console.log(this.state.friends)
                    this.setState({
                        friends: response.data
                    })
                    console.log(this.state.friends)
                })
                .catch(error=>{
                    console.log(error)
                })
    }

    deleteFriendById =(id)=>{
        console.log("Delete friend by id: " + id)
    }



    renderFriends=()=>{
        return this.state.friends.map(friend=>{
            return(
                <Friend key={friend.id}
                        id={friend.id}
                        un={friend.username}
                        nm={friend.name}
                        yr={friend.years}
                        delId={this.deleteFriendById}
                      
                ></Friend>
            )
        })
    }

    render() { 
        return ( 
            <div>
               <table border="1">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Years</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderFriends()}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default AllFriends;
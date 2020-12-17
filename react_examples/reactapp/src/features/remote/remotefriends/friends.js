import React from 'react'
import axios from 'axios'
import Friend from './friend'


class Friends extends React.Component {

    
    constructor(props){
        super(props)
        this.state = {
           friends: [],
           displayNewFormStatus: false,
           newName:"",
           newUsername:"",
           newYears:0
            
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

    renderFriends=()=>{
        return this.state.friends.map(friend=>{
            return(
                <Friend key={friend.id}
                        id={friend.id}
                        un={friend.username}
                        nm={friend.name}
                        yr={friend.years}
                ></Friend>
            )
        })
    }

    addFriend=(e)=>{
        e.preventDefault()
        var newFriend = {
            "name": this.state.newName,
            "username": this.state.newUsername,
            "years": this.state.newYears
        }
        axios.post("http://localhost:1234/friendsapp", newFriend)
            .then(response=>{
                console.log(response)
                this.setState({
                    newName:"",
                    newUsername:"",
                    newYears:0,
                    displayNewFormStatus: false
                })


            })
            .catch(error=>{
                console.log(error)
            })


    }

    captureName=(e)=>{
        console.log(e.target.value)
        this.setState({
            newName: e.target.value
        })
    }

    captureUsername=(e)=>{
        console.log(e.target.value)
        this.setState({
            newUsername: e.target.value
        })
    }

    captureYears=(e)=>{
        console.log(e.target.value)
        this.setState({
            newYears: e.target.value
        })
    }

    displayAddNewForm=()=>{
        if(this.state.displayNewFormStatus){
             return (
            <div>
               <form>
                    <input type="text" 
                           placeholder="name"
                           onChange={this.captureName}>
                    </input>
                    <br></br>
                    <input type="text" 
                           placeholder="Username"
                           onChange={this.captureUsername}>
                    </input>
                    <br></br>
                    <input type="number"
                           placeholder="Years"
                           onChange={this.captureYears}>
                    </input>
                    <br></br>
                    
                    if({this.state.newName == ""}){
                         <button onClick={this.addFriend}
                         disabled={true}>
                             Add
                        </button>
                    }else{
                        <button onClick={this.addFriend}
                            disabled={false}>
                            Add
                        </button>
                    }
                 
               </form>
            </div>
        )
        }
       
    }

    toggleNewForm=()=>{
        this.setState({
            displayNewFormStatus: !this.state.displayNewFormStatus
        })
    }   

    render() { 
        return ( 
            <div>
                Friends..from the fake rest api....
                <br></br>
                <button onClick={this.toggleNewForm}>Add New</button>
                {this.displayAddNewForm()}
                <br></br>
                <br></br>
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
 
export default Friends;
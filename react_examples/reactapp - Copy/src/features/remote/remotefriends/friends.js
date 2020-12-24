import React from 'react'
import axios from 'axios'
import Friend from './friend'


class Friends extends React.Component {

    
    constructor(props){
        super(props)
        this.state = {
           friends: [],
           displayNewFormStatus: false,
           displayEditFormStatus:false,
           newName:"",
           newUsername:"",
           newYears:0,
           editId:0,
           editName:"",
           editUsername:"",
           editYears:0
            
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
        axios.delete("http://localhost:1234/friendsapp" + "/" + id)
            .then(response=>{
                console.log(response)
                this.getRemoteFriends()
            })
            .catch(error=>{
                console.log(error)
            })
    }

    editFriendById=(id)=>{
        console.log("Edit friend by id: " + id)
        this.setState({
            displayEditFormStatus: !this.state.displayEditFormStatus
        })
        axios.get("http://localhost:1234/friendsapp" + "/" + id)
            .then(response=>{
                console.log(response.data)
                this.setState({
                    editId: response.data.id,
                    editName:response.data.name,
                    editUsername:response.data.username,
                    editYears:response.data.years
                })

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
                        delId={this.deleteFriendById}
                        editId={this.editFriendById}
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
                this.getRemoteFriends()


            })
            .catch(error=>{
                console.log(error)
            })


    }

    updateFriend=(e)=>{
        e.preventDefault()
        var editFriend = {
            "name": this.state.editName,
            "username": this.state.editUsername,
            "years": this.state.editYears
        }
        axios.put("http://localhost:1234/friendsapp" + "/" + this.state.editId, editFriend)
        .then(response=>{
            console.log(response)
            this.setState({
                editName:"",
                editUsername:"",
                editYears:0,
                displayEditFormStatus: false,
                editId:0
            })
            this.getRemoteFriends()


        })
        .catch(error=>{
            console.log(error)
        })
    }

    captureName=(e)=>{
        console.log(e.target.value)
        if(this.state.displayNewFormStatus){
            this.setState({
                newName: e.target.value
            })
        }
        if(this.state.displayEditFormStatus){
            this.setState({
                editName: e.target.value
            })
        }
        
    }

    captureUsername=(e)=>{
        if(this.state.displayNewFormStatus){
            console.log(e.target.value)
            this.setState({
                newUsername: e.target.value
            })
        }
        if(this.state.displayEditFormStatus){
            console.log(e.target.value)
            this.setState({
                editUsername: e.target.value
            })
        }
        
       
    }

    captureYears=(e)=>{
        if(this.state.displayNewFormStatus){
            console.log(e.target.value)
            this.setState({
                newYears: e.target.value
            })
        }
        if(this.state.displayEditFormStatus){
            console.log(e.target.value)
            this.setState({
                editYears: e.target.value
            })
        }
        
        
    }

    displayEditForm=()=>{
        if(this.state.displayEditFormStatus){
            return (
                <div>
                <form>
                    <input type="text" 
                            placeholder="id"
                            value={this.state.editId} 
                            readOnly>
                     </input>
                     <br></br>
                     <input type="text" 
                            placeholder="name"
                            onChange={this.captureName}
                            value={this.state.editName}>
                     </input>
                     <br></br>
                     <input type="text" 
                            placeholder="Username"
                            onChange={this.captureUsername}
                            value={this.state.editUsername}>
                     </input>
                     <br></br>
                     <input type="number"
                            placeholder="Years"
                            onChange={this.captureYears}
                            value={this.state.editYears}>
                     </input>
                     <br></br>
                  
                          <button onClick={this.updateFriend}>
                              Update
                         </button>
          
                
                </form>
             </div>
            )
        }
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
                    
                    if({this.state.newName === ""}){
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
                {this.displayEditForm()}
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
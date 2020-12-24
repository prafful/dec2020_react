import React from 'react';

class MyHeader extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lifecycle: 88,
            friends:[],
            friendDetail:[]
        }
    }

    score = 8

    alien = {
        border: "4px dotted purple",
        color: "green"
    }

    teleportNow =()=>{
        return "I am from Mars!!!!"
    }

    whoAmI=()=>{
        console.log("Am I alien?")
    }

    componentWillMount(){
        console.log("will mount")
        this.setState({
            selectedFriend: "",
            friends: ['obb', 'bnp', 'cas', 'owioh', 'obb', 'cas'],
            friendDetail:[
                {
                    id:1,
                    location:"chennai"
                },
                {
                    id:2, 
                    location:"bengaluru"
                },
                {
                    id:3,
                    location:"rajasthan"
                }
            ]
        })
        //alert()
    }

    componentDidMount(){
        console.log("did mount")
    }

    componentWillUpdate(){
        console.log("will update")
    }

    componentDidUpdate(){
        console.log("did update")
    }

    changeLifeCycle=()=>{
        this.setState({
            lifecycle: this.state.lifecycle + 1
        })
    }

    getFriend=(e)=>{
        console.log("Clicked on friend with index: " )
        console.log(e.target)
        this.setState({
            selectedFriend: e.target.innerText
        })
    }

   
    displayFriends=()=>{
       return this.state.friends.map((friend, i)=>{
            return (
                <li key={i} 
                    onClick={this.getFriend}>
                    {friend} @ {i}
                </li>
            )
        })
    }

    getFriendDetail=(e)=>{
        console.log(e)
        console.log(e.target.innerText)
        this.setState({
            selectedFriend: e.target.innerText
        })
    }

    displayFriendDetail=()=>{
        return this.state.friendDetail.map((friend)=>{
             return (
                 <li key={friend.id} 
                     onClick={this.getFriendDetail}>
                     {friend.location} 
                 </li>
             )
         })
     }
  
    render() { 
        return (  
            <div>
                <h2 style={{color:"red"}}>
                    Header @ {this.state.lifecycle}
                    &nbsp; 
                    <button onClick={this.changeLifeCycle}>Change</button>
                </h2>
                <p>Score: {this.score} </p>
                <p style={{border:"1px solid red"}}>Teleport: {this.teleportNow()}</p>
                <p style={this.alien}>Alien call: {this.whoAmI()}</p>
                <ol>
                    {this.displayFriends()}
                </ol>
                <ol>
                    {this.displayFriendDetail()}
                </ol>
                <p>
                    <b>Selected friend: </b>
                    <span>{this.state.selectedFriend} </span>
                </p>
                <hr></hr>
            </div>
        );
    }
}
 
export default MyHeader;
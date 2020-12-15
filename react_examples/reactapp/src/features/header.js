import React from 'react';

class MyHeader extends React.Component {

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
  
    render() { 
        return (  
            <div>
                <h2 style={{color:"red"}}>Header</h2>
                <p>Score: {this.score} </p>
                <p style={{border:"1px solid red"}}>Teleport: {this.teleportNow()}</p>
                <p style={this.alien}>Alien call: {this.whoAmI()}</p>
                <hr></hr>
            </div>
        );
    }
}
 
export default MyHeader;
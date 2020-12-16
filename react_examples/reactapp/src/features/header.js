import React from 'react';

class MyHeader extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            lifecycle: 88
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
                <hr></hr>
            </div>
        );
    }
}
 
export default MyHeader;
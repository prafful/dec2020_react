import React from 'react';

class ClassComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            score: 8
        }
    }
    
    changeScore=()=>{
        this.setState({
            score: this.state.score+5
        })
    }
    render() { 
        return (  
            <div>
                <h1>Class Component!!!! {this.state.score}</h1>
                <button onClick={this.changeScore}>Change Score</button>
            </div>
        );
    }
}
 
export default ClassComponent;
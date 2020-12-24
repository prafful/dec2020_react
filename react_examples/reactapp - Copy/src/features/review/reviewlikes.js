import React from 'react'

class ReviewLikes extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            myLikes: parseInt(this.props.likes),
            plusText: "Increase Like",
            minusText: "Decrease Like"
        }
    }

    

    increaseLike=()=>{
        console.log(this.state.myLikes)
        this.setState({myLikes: this.state.myLikes+1})
        console.log(this.state.myLikes)
    }

    decreaseLike=()=>{
        console.log(this.state.myLikes)
        this.setState({myLikes: this.state.myLikes-1})
        console.log(this.state.myLikes)
    }
    
    render() { 
        return (
            <span>
              <button onClick={this.increaseLike}>{this.state.plusText }@{this.state.myLikes} </button>
                  {this.state.myLikes}
              <button onClick={this.decreaseLike}>{this.state.minusText}@{this.state.myLikes}</button>
            </span>
          );
    }
}
 
export default ReviewLikes;
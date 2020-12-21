import React from 'react'

class EditFriend extends React.Component {

    componentWillMount(){
        console.log(this.props)
        console.log(this.props.location.data)
    }
    
    navigateAllFriends=()=>{
        this.props.history.push("/friends")
    }

    render() { 
        return ( 
            <div>
                Edit friend....with id....{this.props.location.data}
                <br></br>
                <br></br>
                <button onClick={this.navigateAllFriends}>Go To All Friends</button>
            </div>
         );
    }
}
 
export default EditFriend;
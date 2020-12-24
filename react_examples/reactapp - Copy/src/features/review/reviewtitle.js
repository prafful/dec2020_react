import React from 'react'

class ReviewTitle extends React.Component {
    
    render() { 
        return ( 
            <div style={{color:"blue"}}>
                <div>{this.props.title}</div>
            </div>
         );
    }
}
 
export default ReviewTitle;
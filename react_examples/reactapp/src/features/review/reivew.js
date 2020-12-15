import React from 'react'
import ReviewAction from './reviewaction'
import ReviewDescription from './reviewdescription'
import ReviewTitle from './reviewtitle'

class Review extends React.Component {

    reviewStyle = {
        border:"1px solid pink", 
        margin:"5px", 
        padding:"5px"
    }
    
    render() { 
        return ( 
            <div style={this.reviewStyle}>
                <div>
                    <ReviewTitle title={this.props.reviewtitle}></ReviewTitle>
                </div>
                <div>
                    <ReviewDescription description={this.props.description}></ReviewDescription>
                </div>
                <div>
                    <ReviewAction author={this.props.children}
                                  likes = {this.props.likes}  
                    ></ReviewAction>
                </div>
            </div>
         );
    }
}
 
export default Review;
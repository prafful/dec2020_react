import React from 'react'
import ReviewAuthor from './reviewauthor';
import ReviewLikes from './reviewlikes';

class ReviewAction extends React.Component {
    
    render() { 
        return (
            <div>
                <ReviewAuthor author={this.props.author}></ReviewAuthor>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <ReviewLikes likes={this.props.likes}></ReviewLikes>
            </div>
          );
    }
}
 
export default ReviewAction;
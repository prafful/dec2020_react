import React from 'react';

class ReviewList extends React.Component {

    reviewlikes = this.props.likes
  
    render() { 
        return ( 
            <div style={{border:"1px solid pink", margin:"5px"}}>
                <h3>List of reviews....</h3>
                <p>Title: {this.props.reviewtitle}</p>
                <p>Likes: {this.reviewlikes}</p>
                <p>Author: {this.props.children}</p>
         
            </div>
         );
    }
}
 
export default ReviewList;
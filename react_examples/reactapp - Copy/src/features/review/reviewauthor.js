import React from 'react'

class ReviewAuthor extends React.Component {
    
    render() { 
        return (
            <span>
               <b>{this.props.author}</b>
            </span>
          );
    }
}
 
export default ReviewAuthor;
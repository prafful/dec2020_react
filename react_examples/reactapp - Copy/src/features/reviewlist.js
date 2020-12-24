import React from 'react';
import Review from './review/reivew';

class ReviewList extends React.Component {

   
  
    render() { 
        return ( 
            <div style={{border:"1px solid pink", margin:"5px"}}>
                <h3>List of reviews....</h3>
                <Review reviewtitle="LG 8x ThinQ" 
                        likes="100"
                        description="It folds like a book. Super Awesome multitasker!!!!">
                            Mohan Kumar
                </Review>
                <Review reviewtitle="Samsung Note 20 Pro" 
                        likes="80"
                        description="Turbo in the hands. Everything is possible!!!!">
                            Yuko San
                </Review>
                <Review reviewtitle="LG Swing" 
                        likes="50"
                        description="Delicate monster!!!!">
                            Rayhn Dahl
                </Review>
            </div>
         );
    }
}
 
export default ReviewList;
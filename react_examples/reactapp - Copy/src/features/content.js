import React from 'react';
import ReviewList from './reviewlist';

class MyContent extends React.Component {
  
    render() { 
        return ( 
            <div>
                <h3>Content Component!!!!</h3>
                <div>
                    <ReviewList ></ReviewList>
                   
                </div>
            </div>
         );
    }
}
 
export default MyContent;
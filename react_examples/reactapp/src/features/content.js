import React from 'react';
import ReviewList from './reviewlist';

class MyContent extends React.Component {
  
    render() { 
        return ( 
            <div>
                <h3>Content Component!!!!</h3>
                <div>
                    <ReviewList reviewtitle="LG 8x ThinQ" likes="100">Mohan Kumar</ReviewList>
                    <ReviewList reviewtitle="Samsung Note 20 Pro" likes="80">Yuko San</ReviewList>
                    <ReviewList reviewtitle="LG Swing" likes="50">Rayhn Dahl</ReviewList>
                </div>
            </div>
         );
    }
}
 
export default MyContent;
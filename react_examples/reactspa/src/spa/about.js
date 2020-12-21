import React from 'react';


class About extends React.Component {

    componentWillMount(){
        console.log(this.props)
    }
    
    render() { 
        return ( 
            <div>
                <h2>About</h2>
                <p>About page....</p>
            </div>
         );
    }
}
 
export default About;
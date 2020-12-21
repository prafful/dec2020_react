import React from 'react';


class Service extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            name:"pd",
            location:"chennai"
        }
    }

    navigateAbout=()=>{
        //this.props.history.push("/about")
       /*  this.props.history.push({
            pathname:"/about",
            data:['obb', 'cas']
        }) */
        this.props.history.push({
            pathname:"/about",
            data:this.state
        }) 
    }
    
    render() { 
        return ( 
            <div>
                <h2>Service</h2>
                <p>Service page....</p>
                <button onClick={this.navigateAbout}>Go To About</button>
            </div>
         );
    }
}
 
export default Service;
import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {

    navigateTemp = {
        pathname: '/about',
        data: ['owioh', 'bnp']
    }
    
    render() { 
        return ( 
            <div>
             <Link to="/">Home</Link>   
             &nbsp;
             <Link to="/service">Service</Link>   
             &nbsp;
             <Link to="/about">About</Link> 
             &nbsp;&nbsp;&nbsp;
             <Link to={this.navigateTemp}> About (Do not click me after clicking previous About)</Link> 
             &nbsp;
             <Link to="/friends">All friends</Link> 
             &nbsp;
             <Link to="/addfriend">Add friend</Link> 
             
            </div>
         );
    }
}
 
export default Menu;
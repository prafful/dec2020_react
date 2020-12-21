import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './about';
import AddFriend from './addfriend';
import AllFriends from './allfriends';
import EditFriend from './editfriend';
import Home from './home';
import Service from './service';


class Content extends React.Component {
    
    render() { 
        return ( 
            <div>
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/service" component={Service}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/friends" component={AllFriends}></Route>
                <Route path="/addfriend" component={AddFriend}></Route>
                <Route path="/editfriend" component={EditFriend}></Route>
              </Switch>
            </div>
         );
    }
}
 
export default Content;
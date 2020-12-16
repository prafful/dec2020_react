import React from 'react'
import MyContent from '../features/content'
import MyHeader from '../features/header'
import Remote from '../features/remote/remote'



class RootComponent extends React.Component {
   
    render() { 
        return (
            <div>
                <div>
                    <h1>Root Component!!!! Check</h1>
                    <h2>Works!</h2>
                    <MyHeader></MyHeader>
                    <MyContent></MyContent>
                    <Remote></Remote>
                </div>
          
            </div>

          );
    }
}
 

export default RootComponent

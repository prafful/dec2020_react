import React from 'react'
import MyContent from '../features/content'
import MyHeader from '../features/header'



class RootComponent extends React.Component {
   
    render() { 
        return (
            <div>
                <div>
                    <h1>Root Component!!!! Check</h1>
                    <h2>Works!</h2>
                    <MyHeader></MyHeader>
                    <MyContent></MyContent>
                </div>
          
            </div>

          );
    }
}
 

export default RootComponent

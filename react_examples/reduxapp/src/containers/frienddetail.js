import React from 'react'
import { connect } from 'react-redux';

class Detail extends React.Component {

    displayStats=(id)=>{
        var friendstats =  this.props.stats.find(fs=>fs.id === id)
        return (
            <div>
               <b>Likes:</b>{friendstats.likes}
               <br></br>
               <b>Age:</b>{friendstats.age}
            </div>
        )
    }
    
    render() {
        if(this.props.detail.length === 0){
            return (
                <div>
                <h3>Friend Detail....</h3>
                <h4>Click on friend above to view details....</h4>
                </div>
            )
        }else{
            return ( 
            <div>
                <h3>Friend Detail....{this.props.detail.id}</h3>
                
                <b>Name: </b>{this.props.detail.name}
                <br></br>
                <b>Username:</b>{this.props.detail.username}
                <br></br>
                <b>Years:</b>{this.props.detail.years}
                <br></br>
                {this.displayStats(this.props.detail.id)}
            </div>
         );
        }
        
        
    }
}

function convertStoreToPropsForDetail(store){
    console.log("Store received in Detail....")
    console.log(store)
    return {
        stats: store.friendStats,
        detail: store.friendDetail
    }
}

 
export default connect(convertStoreToPropsForDetail)(Detail)
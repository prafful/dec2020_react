import React from 'react'
import axios from 'axios'


class Remote extends React.Component {

    constructor(props){
        super(props)
        this.state = {
           posts: []
            
        }
    }

    componentWillMount(){
        this.loadBlogs()
    }

    loadBlogs=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                console.log(response)
                console.log(response.data)
                console.log(this.state.posts)
                this.setState({
                    posts:response.data
                })
                console.log(this.state.posts)
            })
            .catch(error=>{
                console.log(error)
            })
    }
    
    displayPosts=()=>{
        return this.state.posts.map(p=>{
            return (
                <li key={p.id}>
                    ##{p.title}
                </li>
            )
        })
    }

    render() { 
        return ( 
            <div>
                Load blogs...
                <ol>
                    {this.displayPosts()}
                </ol>
            </div>
         );
    }
}
 
export default Remote
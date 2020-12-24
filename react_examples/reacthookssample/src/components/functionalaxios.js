import axios from 'axios'
import { useEffect, useState } from "react";

function GetData(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        function getRemoteUsers(){
             axios.get("http://jsonplaceholder.typicode.com/users")
                    .then(response=>{
                        console.log(response)
                        setUsers(response.data)
                    })
                    .catch(error=>{
                        console.log(error)
                    })

        }
       
        getRemoteUsers()



    })
    
    const renderUsers=()=>{
        return users.map(u=>{
            return (
                <li key={u.id}>{u.name}</li>
            )
        })
    }

    return(
        <div>
            <h1>Get data....</h1>
            {renderUsers()}
        </div>
    )
}



export default GetData
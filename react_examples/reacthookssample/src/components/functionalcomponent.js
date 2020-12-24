import { useState } from "react";


function FunctionalComponent(){


  
    const [score, changeScore] = useState(88)
 
    const changeMe=()=>{
        changeScore(s=>s+10)
    }
   
        return (  
            <div>
                <h1>Class Component!!!! {score}</h1>
                <button onClick={changeMe}>Change Score</button>
            </div>
        )
  
}
 
export default FunctionalComponent;
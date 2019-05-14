import React, { useState , useEffect } from 'react'
  
function Simple(){
    const [show, setIsState] = useState(0);
     function handleClick(){
         setIsState(show+1);
        
     }
     useEffect(()=>{
         alert("change Something");
     })


    return(
        <div>
              <h2>count here : {show} </h2>
        <button onClick={handleClick}>click here </button>
        </div>
    )
}

export default Simple;
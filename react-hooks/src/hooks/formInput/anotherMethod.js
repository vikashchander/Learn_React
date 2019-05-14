import React from 'react'
import  Data from './anotherformInput';



function another(){
        const [age, setShowInput, reset] = Data("");
              
        
              return (
                <div>
                <hr />
                <input 
                type="text "
                  onChange={setShowInput} 
                  placeholder="enter name"
                value={age} />
                <button onClick={reset} place>Reset !!</button>
                <h2>Input is here : {age}</h2>
                </div>
              )
        }
        

export default another;
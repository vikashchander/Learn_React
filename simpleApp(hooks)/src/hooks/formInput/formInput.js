import React, {useState} from 'react';

function ShowForm (){
        const [show, setShowInput] = useState("");
      const  handleChange= (evt) =>{
            setShowInput(evt.target.value);
        }

      return (
        <div>
        <hr />
        <input 
        type="text "
         placeholder="enter name"
          onChange={handleChange} 
        value={show} />
        <h2>Input is here : {show}</h2>
        </div>
      )
}
export default ShowForm;
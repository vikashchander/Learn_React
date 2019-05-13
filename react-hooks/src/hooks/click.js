import React, {useState} from 'react';

function Click (){
        const [count, setCount] = useState(0);

      return (
        <div>
          <p>count : {count}</p>
          <button 
           onClick={()=>{setCount(count+1);  }}>
           Click !!!
           </button>
        </div>
      )
}
export default Click;
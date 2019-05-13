import React  from 'react';
import Use from  './use'
function Toggler (){
        let [isHappy, setIsHappy] =Use(true);
        console.log('use', [isHappy, setIsHappy] =Use(true));

      return (
          <div>
        
          <h2 onClick ={setIsHappy}>{isHappy?'😂' :'😭'}</h2>
          
          
        </div>
      )
}
export default Toggler;
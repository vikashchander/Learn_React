import React from 'react';
import useToggle from '../../hooks/useToggle'

export default function Toggler(){
    const [isFunny , isFunnyState] = useToggle(true); 
    const [isPizza , isPizzaState] = useToggle(false);
    return(
        <div>
            <h2 onClick={isFunnyState}>{isFunny ? '😂':"😒" }</h2>
            <h2 onClick={isPizzaState}>{isPizza ? '🍕':"🍔" }</h2>
        </div>       
    )
    
}
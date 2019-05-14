import  {useState} from 'react';

function Data (intial){
        const [value, setAgeState] = useState(intial);

    const handleChange =e=>{
        setAgeState(e.target.value);
    }
    const resetBtn =()=>{
        setAgeState(" ");
    }
 return [value,handleChange, resetBtn];
}

export default Data;
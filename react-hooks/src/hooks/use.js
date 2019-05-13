import  {useState} from 'react';

function Use(data=false){
    const[count , setState] =useState(data);
    const togglers= ()=>{
     setState(!count);
    }
    return [count, togglers];
}
export default Use;
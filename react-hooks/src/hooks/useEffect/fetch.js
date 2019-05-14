import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Fetch(){
   const num = [1,2,3,4,5,6,7];
   const [data,setIsData] = useState('1');
   const [movie, setIsMovie] = useState('');
    useEffect(()=>{
         async function getData(){
             const api = await axios.get(`https://swapi.co/api/films/${data}`);  
             console.log(api.data);
                setIsMovie(api.data);
             }
             getData();
        },[data])

    return(
        <div>
             <h2>Movies App</h2>
              <p>You Choose movie is : {data}</p>
            
              <h4>{movie.title}</h4>
              <p>{movie.opening_crawl}</p>
           <select value={data} onChange={e =>setIsData(e.target.value)}>
                { num.map((d)=>
                    <option >{d}</option>
                    )}
           </select>
        </div>
    )
}
export default Fetch;
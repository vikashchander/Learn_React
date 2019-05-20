import React from 'react';
import form from '../hooks/form';
import TextField from '@material-ui/core/TextField';

function editTodoForm({id,todo,editTodo, toggleEditTodo}) {
    const [value,handleChange,reset] =form(todo);
return ( 
      <form onSubmit={(e) =>{
          e.preventDefault();
          editTodo(id,value);
          reset();
          toggleEditTodo()
      }}
    style = {{marginLeft :'1rem' ,width :"50%" }}
      >    
      <TextField 
              margin='normal'
               value={value}
             onChange ={handleChange}   
             autoFocus
             />
       </form>    
)
}
export default editTodoForm;
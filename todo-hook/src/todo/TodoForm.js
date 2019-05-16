import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import form  from '../hooks/form'

function TodoForm({addTodo}){
    const [value, handleChange, reset] =form(''); 
    return(
           <Paper>
           <form  onSubmit={e =>{
             e.preventDefault();
             addTodo(value);
             reset();
           }}>
           <TextField 
           value={value} 
           onChange={handleChange} 
           margin='normal' 
           label='Add New Task'
           fullWidth
           />
           </form>
           </Paper>
    );
}

export default TodoForm;
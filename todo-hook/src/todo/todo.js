import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import  Grid from '@material-ui/core/Grid'; 
import TodoList from "./TodoList";
import TodoForm from './TodoForm';

function Todo(){
    const initialValue =[
        {id:1, task:'Clean Fishtank', completed:false},
        {id:2, task:"walk Cat" , completed:true},
        {id:3 , task:'doggie', completed:true}
    ]
    const [todos, setTodos]= useState(initialValue);
    const addTodo = newTodoText =>{
       setTodos([...todos,{id:4,task:newTodoText, completed:true}])
     }

    return (
        <Paper
        style={{
            padding:0,
           margin:0,
            height:"100vh",
             backgroundColor:"#fafafa "
      }}
      elevation={0}
        >
        <AppBar color='primary' position='static' style={{height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS with hooks </Typography>
        </Toolbar>
        </AppBar>
        <TodoForm addTodo={addTodo} />
       <TodoList todos={todos} />
         </Paper>
    );
}

export default Todo;
import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import  Grid from '@material-ui/core/Grid'; 
import TodoList from "./TodoList";
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

function Todo(){
    const initialValue =[
        {id:1, task:'Clean Fishtank', completed:false},
        {id:2, task:"walk Cat" , completed:true},
        {id:3 , task:'doggie', completed:true}
    ]
    const [todos, setTodos]= useState(initialValue);
    const addTodo = newTodoText =>{
       setTodos([...todos,{id:uuid(),task:newTodoText, completed:false}])
     }

     const removeTodo = removeTask =>{
           const remove = todos.filter(todo=>todo.id !==removeTask);
           setTodos(remove);
     }

     const updateTodo = updateTask =>{
      const update = todos.filter(todo=>todo.id ===updateTask);
      setTodos(update);
}

const toggleTodo = toggleTask =>{
  const toggle = todos.map(todo=>
    todo.id ===toggleTask ?{...todo, completed:!todo.completed}: todo
    );
  setTodos(toggle);
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
        <Grid container justify='center' style={{marginTop:'1rem' }}>
        <Grid item xs={11}  md={8} lg={4}> 
        <TodoForm addTodo={addTodo} />
       <TodoList 
       todos={todos} 
       removeTodo ={removeTodo}  
       updateTodo={updateTodo} 
       toggleTodo={toggleTodo}/>
       </Grid>
       </Grid>  
       </Paper>
    );
}

export default Todo;
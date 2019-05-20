import React, { useEffect } from 'react';
import useTodoState from '../hooks/useTodoState';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import  Grid from '@material-ui/core/Grid'; 
import TodoList from "./TodoList";
import TodoForm from './TodoForm';


function Todo(){
    const initialValue = JSON.parse(window.localStorage.getItem('todos')  || "[]");
    const {todos,addTodo,removeTodo,updateTodo, editTodo,toggleTodo}=useTodoState(initialValue);
    // const initialValue =[
    //     {id:1, task:'Clean Fishtank', completed:false},
    //     {id:2, task:"walk Cat" , completed:true},
    //     {id:3 , task:'doggie', completed:true}
    // ]
     useEffect( ()=>{
     window.localStorage.setItem("todos", JSON.stringify(todos));
     }, [todos] );

   

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
       toggleTodo={toggleTodo}
       editTodo ={editTodo} />
       </Grid>
       </Grid>  
       </Paper>
    );
}

export default Todo;
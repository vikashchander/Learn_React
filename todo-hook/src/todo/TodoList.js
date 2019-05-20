import React  from 'react';
//import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import  Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'; 
import Todos from './Todos';

function TodoList({todos, removeTodo, updateTodo, toggleTodo, editTodo }){
    if(todos.length)
    return (
        <Paper style={{marginTop: '1rem'}} >
        <List>
          {todos.map((t,i)=>(
             <>
              <Todos 
               id={t.id}
               todos = {t.task} 
               key={t.id} 
               completed = {t.completed} 
               removeTodo={removeTodo} 
               updateTodo = {updateTodo}
               toggleTodo={toggleTodo}
               editTodo = {editTodo}
               />
             {i < todos.length -1 && <Divider /> } 
              </>
          ))
        }
            </List>
            </Paper>
    );
    return null;
}

export default TodoList;
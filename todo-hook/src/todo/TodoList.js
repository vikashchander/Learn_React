import React  from 'react';
//import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
import   ListItem from '@material-ui/core/ListItem' ; 

import   ListItemText from '@material-ui/core/ListItemText' ; 
//import  Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'; 


function TodoList(props){
    return (
        <Paper>
        <List>
          {props.todos.map(t =>(
            <>
              <ListItem>  
              <ListItemText>{t.task}</ListItemText>
               </ListItem>
              <Divider />
              </>
          ))
        }
            </List>
            </Paper>
    );
}

export default TodoList;
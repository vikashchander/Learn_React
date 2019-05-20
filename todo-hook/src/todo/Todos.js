import React from 'react';
import TodoEdit from './EditForm'
import   ListItem from '@material-ui/core/ListItem' ; 
import    ListItemText from '@material-ui/core/ListItemText' ; 
import  Checkbox from '@material-ui/core/Checkbox';
import  IconButton from '@material-ui/core/IconButton';
import  DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import  ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from '../hooks/useToggleState';



function Todos({todos,completed, removeTodo, id, editTodo, toggleTodo}){
    const [isEditing,toggle] = useToggleState(false);
    return (
        <ListItem style={{height:'64px'}}>
        { isEditing ?
         <TodoEdit  editTodo = {editTodo} id={id} todo={todos} toggleEditTodo ={toggle} />
        :
        <>
        <Checkbox tabIndex ={-1} checked={completed}  onClick={()=>toggleTodo(id) } />
        <ListItemText style={{textDecoration:completed?'line-through' :""}}>{todos}</ListItemText>
        <ListItemSecondaryAction>
        <IconButton aria-label='Delete' onClick ={()=>removeTodo(id)}>
        <DeleteIcon />
        </IconButton>
        <IconButton aria-label='Edit'  onClick={toggle}>
        <EditIcon />
        </IconButton>
        </ListItemSecondaryAction>
        </>   
    }
        </ListItem>
    )
}

export default  Todos;
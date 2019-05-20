import {useState} from 'react';
import uuid from 'uuid/v4';

export default initialTodos =>{
    const [todos,setTodos] =useState(initialTodos);
    return {
        todos,
       addTodo :  newTodoText =>{
        setTodos([...todos,{id:uuid(),task:newTodoText, completed:false}])
      }  ,
      removeTodo: removeTask =>{
        const remove = todos.filter(todo=>todo.id !==removeTask);
        setTodos(remove);
    },
    updateTodo :  updateTask =>{
        const update = todos.filter(todo=>todo.id ===updateTask);
        setTodos(update);
        },
    toggleTodo :  toggleTask =>{
        const toggle = todos.map(todo=>
        todo.id ===toggleTask ?{...todo, completed:!todo.completed}: todo
        );
        setTodos(toggle);
        },
    editTodo : (id,editask) =>{
        const toggle = todos.map(todo=>
        todo.id ===id?{...todo, task : editask}: todo
        );
        setTodos(toggle);
        }
    }
}

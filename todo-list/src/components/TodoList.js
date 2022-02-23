import React, { useState } from 'react';
import Todo from './Todo.js'
import TodoForm from './TodoForm.js'

function TodoList(props) {
    //state array which holds all the todos
    const [todos, setTodos] = useState([]);
    //function to add new todos
    const addTask = (task) => {
        if (!task.text) {
            return;
        }
        setTodos((prevTodos) => [...prevTodos, task]);
        console.log(todos);
    }

    //functions to remove a todo 
    const removeTask = (id) =>{
        let updatedTask = todos.filter(task => task.id !== id)
        setTodos(updatedTask);
        console.log(todos);
    }

    //function for completed tasks
    const completeTask = (id )=>{
        let updatedTask = todos.map(todo =>{
            if (todo.id == id) {
                todo.isComplete =true;
            }

            return todo;
        })
        setTodos(updatedTask);
        console.log(todos);
    }

    return (<>
        <TodoForm addTask={addTask} />
        <Todo todos={todos} onCompleteTask={completeTask} onRemoveTask = {removeTask} />
    </>);
}

export default TodoList;

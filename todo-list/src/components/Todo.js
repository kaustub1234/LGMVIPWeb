import React from 'react';
import { TiTick } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import "./Todo.css";
function Todo(props) {
  return (<>
    {props.todos.map((todo, index) => {
      return (<div className={`${todo.isComplete ? 'complete task-div' : ''}task-div`} key={index}>
        <div className="todo-text">{todo.text}</div>
        <div className="icons" key={todo.id}>
          <TiTick onClick={() => { props.onCompleteTask(todo.id) }} />
          <RiCloseCircleLine onClick={() => { props.onRemoveTask(todo.id) }} />
        </div>
      </div>)
    })
    }
  </>);
}

export default Todo;

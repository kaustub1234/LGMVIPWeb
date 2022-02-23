import React, { useState } from 'react';
import "./TodoForm.css"

function Todoform(props) {
    const submitHandler = (event) => {
        event.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000),
            text: input,
            isComplete: false,
        });
    }
    const ChangeHandler = (e) => {
        setInput(e.target.value);
    }

    const [input, setInput] = useState("");
    return (<>
        <form className="AddGoal">
            <input value={input} type="text" placeholder="add some todo.." onChange={ChangeHandler} />
            <button onClick={submitHandler}>Add Todo</button>
        </form>
    </>);
}

export default Todoform;

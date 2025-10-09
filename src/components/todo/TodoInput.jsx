import React, { useState } from 'react';
const TodoInput = (props) => {

    const [valueInputState, setValueInput] = useState("     ");

    const { addNewTodo } = props;

    const handleClick = () => {
        addNewTodo(valueInputState);
        setValueInput("");
    }

    const handleChange = (name) => {
        setValueInput(name);
    }

    return (
        <div className='todo-input'>
            <input onChange={(name) => {
                handleChange(name.target.value);
            }} value={valueInputState} type="text" className="todo-input" placeholder="Enter a task..." />
            <button className="todo-button" onClick={handleClick}>Add Task</button>
            <div>
                This is input : {valueInputState}
            </div>
        </div>
    )
}

export default TodoInput;
import React from 'react';
import TodoDesc from './TodoDesc';
import TodoInput from './TodoInput';
import ReactLogo from '../../assets/react.svg';
import './todo.css';

const ToDoApp = () => {
    const [toDoList, setTodoList] = React.useState([

]);
const addNewTodo = (todo) => {
    let newTodo = {
        id: `todo${Math.floor(Math.random() * 1000)}`,
        name: todo
    };
    setTodoList([...toDoList, newTodo]);
}

const deleteTodo = (id) => {
    const newTodoList = toDoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
}

return (
    <div className="todo-list">
        <div className="todo-title">Todo List</div>
        <TodoInput
            addNewTodo={addNewTodo}
        />
        {toDoList.length > 0 ?
            <TodoDesc
                toDoList={toDoList}
                deleteTodo={deleteTodo}
            />
            :
            <div className='todo-image'>
                <img src={ReactLogo} className='logo' alt="" />
            </div>
        }
    </div>
)
}

export default ToDoApp;

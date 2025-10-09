const TodoDesc = (props) => {

    const {toDoList} = props;

    const { deleteTodo } = props;

    const handleClick = (id) => {
        deleteTodo(id);
    }
    return (

        <div className='todo-desc'>           
            {toDoList.map( (item,index) => {
                return (<div className="todo-desc-item" key={item.id}>
                    <div>ID: {index + 1} - {item.name}</div>
                    <button onClick={() => {handleClick(item.id)}}>Delete</button>
                </div>);
            })}
        </div>
    )
}

export default TodoDesc;
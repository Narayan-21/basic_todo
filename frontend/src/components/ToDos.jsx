import PropTypes from "prop-types";

export function Todos({todos}){
    const todoList = todos || []
    return <div>
        {
            todoList.map(todo => {
                return <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
                </div>
            })
        }
    </div>
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ),
}
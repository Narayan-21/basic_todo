import {useState} from "react";
import PropTypes from "prop-types";

export function CreateTodo(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value
            setTitle(value)
        }}/><br/>
        <input type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value
            setDescription(value)
        }}/>
        <button onClick={() => {
            fetch("http://localhost:3000/todo/", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json()
                console.log(json)
                alert("Todo added!")
            })
            props.settodos([...props.todos, {
                title: title,
                description: description
            }])
        }}>Add a todo</button>

    </div>
}

CreateTodo.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        })
    ),
    settodos: PropTypes.func.isRequired
}
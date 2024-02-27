import { useState, useEffect } from 'react'
import './App.css'
import {CreateTodo } from "./components/CreateTodo"
import {Todos} from "./components/ToDos"

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch("http://localhost:3000/todos/");
        const json = await response.json();
        setTodos(json.allToDos);
      } catch(error) {
        console.error("Error fetching todos: ", error);
      }
    };
    fetchData();
  }, [])

  return (
    <>
      <CreateTodo settodos={setTodos} todos={todos}/>
      <Todos todos={todos}/>
    </>
  )
}

export default App

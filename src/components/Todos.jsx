import { useEffect, useState } from "react"
import './Comments.scss'


const Todos = () => {
    const [todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([]);

    const fetchTodo = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        console.log(data);
        setTodo(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getTodos = async (id) => {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
          const data = await res.json()
          setTodos(data)
        } catch (error) {
          console.log(error);
        }
      }


    useEffect(() => {
        fetchTodo();
      }, []);


  return (
    <>
              <div className="todos">
        {todo.map((todo) => (
          <div key={todo.id} className="">
            <h2>{todo.id}</h2>
            <h2>{todo.title}</h2>
            <button onClick={() => getTodos(todo.id)}>Completed</button>


          </div>
        ))}
      </div>


      <div className="">
        {todos.map((todos) => (
          <div key={todos.id} className="">
            <p>{todos.id}</p>
            <p>{todos.title}</p>
          </div>
        ))}
      </div>
    
    
    
    </>
  )
}

export default Todos
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const { data } = await axios.get(`https://dummyjson.com/todos`);
    setTodos(data.todos);
  }
  function handleChange(e, idx) {
    let res = [...todos];
    res[idx].completed = e.target.checked;
    setTodos(res);
  }
  return (
    <div className="App">
      <h1>Hello Harshit</h1>
      {todos && todos.length > 0 && (
        <table style={{ border: 1 }}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, idx) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.todo}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={(e) => handleChange(e, idx)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

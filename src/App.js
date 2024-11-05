import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";
import { eachItem } from "ajv/dist/compile/util";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    event.preventDefault();
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.trim() !== "") setTodos((current) => [todo.trim(), ...current]);
    setTodo("");
  };
  console.log(todos);
  return (
    <div className="App">
      <h1 className={styles.title}>My ToDos : ({todos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={todo}
          placeholder="Write a ToDo"
        ></input>
        <Button text={"Submit"} />
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

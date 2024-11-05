import Button from "./Button";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setTodos((current) => [todo, ...current]);
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
      </form>
      <Button text={"Submit"} />
    </div>
  );
}

export default App;

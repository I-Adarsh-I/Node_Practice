import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import Navbar from "./Navbar";

function Todo() {
  // const todo = ["Play games", "Make notes", "Watch tutorials"];

  const [task, setTask] = useState(" ");
  const [todo, setTodo] = useState(["Play games", "Make notes", "Watch tutorials"]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Task added');
    setTodo(allTasks => [...allTasks, task])
  };
  return (
    <div>
      <Navbar />
      <form style={{ margin: "30px  0 0 0" }} onSubmit={submitHandler}>
        <label htmlFor="item">Enter the task: </label>
        <input
          type="text"
          id="item"
          placeholder="Task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <Button variant="dark">
          Submit
        </Button>
        <ul>
          {todo.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Todo;


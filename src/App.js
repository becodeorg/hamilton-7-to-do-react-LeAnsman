import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  // we put the state here so we can use it in every files
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo__app">
      {/* Taking setInputText and passing it to the form with a props*/}
      {/* We can get access to it in the Todoform */}
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* inputText update himself with the e.target.value that we took in the TodoForm */}
      {/* <p>{inputText}</p> */}
    </div>
  );
};

export default App;

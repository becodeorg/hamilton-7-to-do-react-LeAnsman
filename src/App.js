import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  // we put the state here so we can use it in every files
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [selects, setSelects] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // get rid of the error
    // eslint-disable-next-line
  }, [todos, selects]);

  // filter the todos
  const filterHandler = () => {
    switch (selects) {
      case "complete":
        setFilteredTodos(todos.filter((todo) => todo.complete === true));
        break;
      case "inProgress":
        setFilteredTodos(todos.filter((todo) => todo.complete === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //save to local
  const saveLocalTodos = () => {
    // needed to add a condition because not saving on reload
    if (todos.length > 0) {
      // pushing everything in the key "todos"
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    // if there is no todo, create a empty array in local storage
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // if there is todos, parse them en set them as todos
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="todo__app">
      {/* Taking setInputText and passing it to the form with a props*/}
      {/* We can get access to it in the Todoform */}
      <h1 className="todo__title">To Do App in React</h1>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        selects={selects}
        setSelects={setSelects}
      />
      <TodoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
      {/* inputText update himself with the e.target.value that we took in the TodoForm */}
      {/* <p>{inputText}</p> */}
    </div>
  );
};

export default App;

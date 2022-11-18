import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo__container">
      <h3>Todo list :</h3>
      <ul className="todo__list">
        {/* Map through the todo and display Todo */}
        {todos.map((todo) => (
          <Todo
            // pass the props
            todo={todo}
            text={todo.text}
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

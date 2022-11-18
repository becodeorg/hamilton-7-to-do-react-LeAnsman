import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    // filter the todos array and filter out the element the gets clicked on
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  const completeHandler = () => {
    // set complete from false to true
    setTodos(
      todos.map((item) => {
        // again, comparing the item clicked and the todo in state
        if (item.id === todo.id) {
          return {
            // return the item but with complete value switched
            ...item,
            complete: !item.complete,
          };
        }
        // else, just return the item
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* we are gonna write JS so {}; ?if it's true :if false  */}
      <li className={`todo__item ${todo.complete ? "complete" : ""}`}>
        <input onClick={completeHandler} type="checkbox" />
        {text}
      </li>
      <button onClick={deleteHandler} className="btn__delete">
        Delete
      </button>
    </div>
  );
};

export default Todo;

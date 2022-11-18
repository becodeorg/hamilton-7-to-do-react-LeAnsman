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

  // useEffect(() => {
  //   if (localStorage.getItem("localTasks")) {
  //     const storedList = JSON.parse(localStorage.getItem("localTasks"));
  //     setTodos(storedList);
  //   }
  // }, []);

  // const newTodos = [todo, ...todos];
  // localStorage.setItem("localTasks", JSON.stringify(newTodos));
  // setTodos(newTodos);

  return (
    <div className="todo">
      {/* we are gonna write JS so {}; ?if it's true :if false  */}
      <li className="todo__item">
        <p className={`todo__item__text ${todo.complete ? "complete" : ""}`}>
          {text}
        </p>
        <input
          onClick={completeHandler}
          type="checkbox"
          className="todo__item__checkbox"
        />
        <span class="checkmark"></span>
        <button onClick={deleteHandler} className="todo__btn__delete">
          Delete
        </button>
      </li>
    </div>
  );
};

export default Todo;

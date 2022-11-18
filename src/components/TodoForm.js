import React from "react";

const TodoForm = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    // console.log(e);
    // get the value of the input
    // console.log(e.target.value);
    // passing the value of the input in the setInputText so inputText === e.target.value
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    // to prevent from reloading the page when we hit the submit btn
    e.preventDefault();
    // if there is already some todos, add it to the array
    // so todos is gonna be [{complete:,id:,text:e.target.value}, {same}]
    setTodos([
      ...todos,
      { text: inputText, complete: false, id: Math.random() * 1000 },
    ]);
    // delete the content of the inputText (the value of the input)
    setInputText("");
  };
  return (
    <form>
      <input
        type="text"
        className="todo__input"
        placeholder="Type a new todo"
        // Everytime the input change -> inputTextHandler run
        onChange={inputTextHandler}
        // to put the inputText value as a value
        value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo__btn" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;

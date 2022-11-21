import React, { useRef } from "react";

const TodoForm = ({ setInputText, todos, setTodos, setSelects }) => {
  const choiceHandler = (e) => {
    setSelects(e.target.value);
  };

  //using useRef
  const inputRef = useRef();
  const inputTxt = inputRef.current;

  //without useRef
  // const inputTextHandler = (e) => {
  //   // console.log(e);
  //   // get the value of the input
  //   // console.log(e.target.value);
  //   // passing the value of the input in the setInputText so inputText === e.target.value
  //   setInputText(e.target.value);
  // };

  const submitTodoHandler = (e) => {
    // to prevent from reloading the page when we hit the submit btn
    e.preventDefault();

    setTodos([
      // if there is already some todos, add it to the array
      ...todos,
      { text: inputTxt.value, complete: false, id: Math.random() * 1000 },
    ]);
    // delete the content of the inputText (the value of the input)
    setInputText("");
  };
  return (
    <form className="todo__form">
      <input
        type="text"
        className="todo__input"
        placeholder="Type a new todo"
        //using useRef :
        ref={inputRef}

        //without useRef:
        // Everytime the input change -> inputTextHandler run
        // onChange={inputTextHandler}
        // to put the inputText value as a value
        // value={inputText}
      />
      <button onClick={submitTodoHandler} className="todo__btn" type="submit">
        Add Todo
      </button>
      <select
        className="todo__choices"
        name="todoChoices"
        onChange={choiceHandler}
      >
        <option value="all">All</option>
        <option value="inProgress">In progress</option>
        <option value="complete">Completed</option>
      </select>
    </form>
  );
};

export default TodoForm;

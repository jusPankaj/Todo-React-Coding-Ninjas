import React, { useState } from "react";

export const TodosForm = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  function handleSubit(e) {
    e.preventDefault();
    addTodo(newTodoText);
    setNewTodoText(' '); // to clear the inputs after adding it to the list
  }

  return (
    <>
      <form style={styles.todosForm} onSubmit={handleSubit}>
        <input
          style={styles.inputBox}
          placeholder="What do you want to do today?"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        {/* <button style={styles.btns}>Edit</button> */}
        <button style={styles.btns} type="submit">
          Add
        </button>
      </form>
    </>
  );
};


//CSS styling
const styles = {
  todosForm: {
    margin: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
  inputBox: {
    boxSizing: "border-box",
    width: "650px",
    height: "45px",
    padding: "6px",
    borderRadius: "0.5em",
  },
  btns: {
    boxSizing: "border-box",
    height: "45px",
    margin: "0 10px",
    width: "75px",
    fontSize: "19px",
    borderRadius: "0.5em",
    backgroundColor: "rgba(0,119,255,0.9)",
    color: "White",
    fontWeight: "bolder",
  },
};

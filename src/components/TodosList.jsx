import { FaRegTrashCan } from "react-icons/fa6";

const TodosList = ({ todos, setTodos, updateTodo, deleteTodo }) => {
  return (
    <>
      {/* <h1>Todo List</h1> */}
      {todos &&
        todos.map((todo) => {
          // const { title, completed } = todo;
          return (
            <div style={styles.todosContainer} key={todo.id}>
              <form style={styles.formDiv}>
                <input
                  style={styles.checkBox}
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) =>
                    updateTodo(todo.id, { completed: e.target.checked })
                  }
                />
                <p style={styles.forTitle}>{todo.title}</p>
                {/* <p>{todo.id}</p> */}
                {/* <button  style={styles.btn}>Edit</button> */}
                <div style={styles.trash} onClick={() => deleteTodo(todo.id)}>
                  <FaRegTrashCan />
                </div>
              </form>
            </div>
          );
        })}
    </>
  );
};

const styles = {
  todosContainer: {
    display: "flex",
    justifyContent: "center",
  },
  formDiv: {
    display: "flex",
    height: "35px",
    width: "50vw",
    border: "1px solid blue",
    backgroundColor: "lightblue",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "2px",
    borderRadius: "1em",
  },
  checkBox: {
    height: "17px",
    margin: "15px",
    flex: "1",
  },
  forTitle: {
    marginLeft: "0",
    flex: "8",
    margin: "15px",
  },
  btn: {
    width: "40px",
    margin: "10px",
    flex: "1",
    borderRadius: "0.5em",
  },
  trash: {
    margin: "15px",
    flex: "1",
    fontSize: "20px 0 20px 50px",
  },
};

export default TodosList;

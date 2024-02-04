import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const baseURL = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data;
      setTodos(data);
    });
  }, []);

  console.log(todos);
  return (
    <>
      {todos &&
        todos.map((todo) => {
          const { title, completed } = todo;
          return ( completed &&
            <div>
              <h3>{title}</h3>
              <h6>{`completed :${completed}`}</h6>
            </div>
          );
        })}
    </>
  );
};

export default Todos;

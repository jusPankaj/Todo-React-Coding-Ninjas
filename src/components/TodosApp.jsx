import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { TodosForm } from './TodosForm'
import TodosList from './TodosList'
import axios from 'axios'

const TodosApp = () => {

    const [todos, setTodos] = useState([]);
    const baseURL = "https://jsonplaceholder.typicode.com/todos";


    useEffect(() => {
        fetchTodos();
    }, []);


    const fetchTodos = async() => {
        try {
            const response = await axios.get(baseURL);
            setTodos(response.data);
        } catch (error) {
            console.error("Error fetching todos ", error);
        }
    }

    const addTodo = async(title) => {
        try {
            const response = await axios.post(baseURL, {
                title,
                completed: false
            });
            const newTodo = response.data;
            setTodos([...todos, newTodo]);
        } catch (error) {
            console.error("Error Adding todo ", error);            
        }
    }

    const updateTodo = async(id, updatedData) => {
        try {
            await axios.post(`${baseURL}/${id}`, updatedData );
            const updatedTodos = todos.map((todo) => (
                todo.id === id ? { ...todo, ...updatedData} : todo
            ))
            setTodos(updatedTodos);
        } catch (error) {
            console.error("Error Updating todo ", error);
        }
    }


    const deleteTodo = async(id) => {
        try {
            await axios.get(`${baseURL}/${id}`);
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
            
        } catch (error) {
            console.error("Error Deleting todo ", error);
        }
    }


  return (
    <div>
        <Navbar />
        <TodosForm addTodo={addTodo}/>
        <TodosList todos={todos} setTodos={setTodos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodosApp
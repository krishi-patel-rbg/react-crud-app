// App.js
import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { name: "Buy Groceries", date: "2024-06-10" },
    { name: "Complete React Project", date: "2024-06-15" },
  ]);

  // CREATE
  const handleAddTodo = (name, date) => {
    const newTodo = { name, date };
    setTodos([...todos, newTodo]);
  };

  // DELETE
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  // UPDATE (Edit)
  const handleEditTodo = (index, newName, newDate) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { name: newName, date: newDate } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="container text-center">
        <AddTodo onAddTodo={handleAddTodo} />
        <hr />
        {todos.length === 0 ? (
          <p>No Todos yet! Add one above.</p>
        ) : (
          todos.map((todo, index) => (
            <div key={index}>
              <TodoItem1
                todoName={todo.name}
                todoDate={todo.date}
                onDelete={() => handleDeleteTodo(index)}
                onEdit={(newName, newDate) =>
                  handleEditTodo(index, newName, newDate)
                }
              />
              <hr />
            </div>
          ))
        )}
      </div>
    </center>
  );
}

export default App;

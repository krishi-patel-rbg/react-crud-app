// components/AddTodo.js
import { useState } from "react";

function AddTodo({ onAddTodo }) {
    const [todoName, setTodoName] = useState("");
    const [todoDate, setTodoDate] = useState("");

    const handleAdd = () => {
        if (todoName.trim() === "" || todoDate === "") {
            alert("Please enter both task name and date!");
            return;
        }

        onAddTodo(todoName, todoDate); // call parent function
        setTodoName("");
        setTodoDate("");
    };

    return (
        <div className="row mb-3">
            <div className="col-6">
                <input
                    type="text"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                    placeholder="Add your todo"
                    className="form-control"
                />
            </div>
            <div className="col-4">
                <input
                    type="date"
                    value={todoDate}
                    onChange={(e) => setTodoDate(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="col-2">
                <button className="btn btn-success" onClick={handleAdd}>
                    Add Todo
                </button>
            </div>
        </div>
    );
}

export default AddTodo;

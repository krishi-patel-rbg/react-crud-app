// components/TodoItem.js
import { useState } from "react";

function TodoItem({ todoName, todoDate, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(todoName);
    const [editedDate, setEditedDate] = useState(todoDate);

    const handleSave = () => {
        onEdit(editedName, editedDate);
        setIsEditing(false);
    };

    return (
        <div className="row mb-2 align-items-center">
            {/* Edit Mode */}
            {isEditing ? (
                <>
                    <div className="col-6">
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-4">
                        <input
                            type="date"
                            value={editedDate}
                            onChange={(e) => setEditedDate(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-success btn-sm" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </>
            ) : (
                // Normal Display Mode
                <>
                    <div className="col-6">{todoName}</div>
                    <div className="col-3">{todoDate}</div>
                    <div className="col-3">
                        <button
                            className="btn btn-primary btn-sm me-2"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={onDelete}
                        >
                            Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default TodoItem;

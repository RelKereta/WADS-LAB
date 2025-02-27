import React, { useState } from 'react';

export const EditTodoForm = ({ editToDo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value.trim()) return;
        editToDo(task.id, value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm text-gray-700"
                placeholder="Update task"
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Update</button>
        </form>
    );
};
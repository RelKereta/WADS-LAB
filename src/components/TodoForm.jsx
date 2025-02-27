import React, { useState } from 'react';

export const TodoForm = ({ addToDo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addToDo(value);
        setValue("");   
    };

    return (
        <form className="flex gap-2 p-2" onSubmit={handleSubmit}>
            <input
                type="text"
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm"
                value={value}
                placeholder="Enter task"
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Add Task</button>
        </form>
    );
};

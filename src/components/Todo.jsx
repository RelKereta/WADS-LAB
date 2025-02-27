import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, toggleComplete, deleteToDo, editToDo }) => {
    return (
        <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow mb-2">
            <p className={`${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>{task.task}</p>

            <div className="flex gap-4">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="cursor-pointer"
                />

                <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-yellow-500 cursor-pointer hover:text-yellow-600"
                    onClick={() => editToDo(task.id)}
                />

                <FontAwesomeIcon
                    icon={faTrash}
                    className="text-red-500 cursor-pointer hover:text-red-600"
                    onClick={() => deleteToDo(task.id)}
                />
            </div>
        </div>
    );
};

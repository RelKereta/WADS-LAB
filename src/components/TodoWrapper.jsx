import React, { useState } from 'react';
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm.jsx';

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);

    const addToDo = (toDo) => {
        setToDos([...toDos, { id: uuidv4(), task: toDo, completed: false, isEditing: false }]);
    };

    const toggleComplete = (id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteToDo = (id) => {
        setToDos(toDos.filter(todo => todo.id !== id));
    };

    const editToDo = (id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    };

    const editTask = (id, newTask) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo));
    };

    const filteredTasks = showCompleted ? toDos.filter(todo => todo.completed) : toDos;

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold text-center mb-4">Todo List</h1>
            <button onClick={() => setShowCompleted(!showCompleted)} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full">
                {showCompleted ? 'Show All Tasks' : 'Show Completed Tasks'}
            </button>
            <TodoForm addToDo={addToDo} />
            <div className="space-y-3 mt-4">
                {filteredTasks.map((todo) => (
                    todo.isEditing ? (
                        <EditTodoForm editToDo={editTask} task={todo} key={todo.id} />
                    ) : (
                        <Todo task={todo} toggleComplete={toggleComplete} deleteToDo={deleteToDo} editToDo={editToDo} key={todo.id} />
                    )
                ))}
            </div>
        </div>
    );
};
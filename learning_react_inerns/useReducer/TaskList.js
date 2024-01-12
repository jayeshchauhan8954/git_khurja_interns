import React, { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [editedTaskText, setEditedTaskText] = useState('');

  function handleEditTask(taskId, taskText) {
    setEditableTaskId(taskId);
    setEditedTaskText(taskText);
  }

  function handleSaveTask(taskId) {
    onChangeTask({ id: taskId, text: editedTaskText, done: tasks.find(task => task.id === taskId).done });
    setEditableTaskId(null);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onChangeTask({ ...task, done: !task.done })}
          />
          {editableTaskId === task.id ? (
            <>
              <input
                type="text"
                value={editedTaskText}
                onChange={(e) => setEditedTaskText(e.target.value)}
              />
              <button onClick={() => handleSaveTask(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => handleEditTask(task.id, task.text)}>Edit</button>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

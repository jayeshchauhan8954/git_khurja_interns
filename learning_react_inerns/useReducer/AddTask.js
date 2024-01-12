import React, { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  function handleAddTask() {
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

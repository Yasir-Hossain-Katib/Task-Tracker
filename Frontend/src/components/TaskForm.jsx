// frontend/src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new task
      await axios.post('http://localhost:5000/api/tasks', { name: taskName });
      setTaskName(''); // Clear the input field after submission
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Task Name:
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;

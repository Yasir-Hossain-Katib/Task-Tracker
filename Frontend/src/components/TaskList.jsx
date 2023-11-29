// frontend/src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  // State to store the tasks retrieved from the backend
  const [tasks, setTasks] = useState([]);

  // useEffect hook to fetch tasks from the backend when the component mounts
  useEffect(() => {
    // Fetch tasks from the backend using Axios
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data)) // Update the state with the fetched tasks
      .catch(error => console.error('Error fetching tasks:', error)); // Log an error if the fetch fails
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  // Render the component
  return (
    <div>
      <h1>Task List</h1>
      {/* Display the list of tasks */}
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

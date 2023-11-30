// frontend/src/components/TaskList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

const TaskList = () => {
  // State to store the tasks retrieved from the backend
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    // Fetch tasks from the backend using Axios
    axios.get('http://localhost:5000/api/tasks')
      .then(response => setTasks(response.data)) // Update the state with the fetched tasks
      .catch(error => console.error('Error fetching tasks:', error)); // Log an error if the fetch fails
  }, []); 

  const handleUpdate = async(taskId,updatedTaskData) => {

    try{

        console.log('Before Update:', tasks);

        await axios.put(`http://localhost:5000/api/tasks/${taskId}`,updatedTaskData);

        const updatedTasks = await axios.get('http://localhost:5000/api/tasks');
        setTasks(updatedTasks.data);



    }catch(error){
        console.error("error updating task",error);
    }

    

    

  };
    
  

  // Render the component
  return (
    <div>
      <h1>Task List</h1>
      <TaskForm
        onSubmit={(updatedTaskName) => {
          // Assuming taskId is obtained from the selected task in the UI
          const taskId = task._id; // Replace with the actual taskId logic
          handleUpdate(taskId, { name: updatedTaskName });
        }}
      />
      {/* Display the list of tasks */}
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.name}
            <button onClick={() => handleUpdate(task._id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

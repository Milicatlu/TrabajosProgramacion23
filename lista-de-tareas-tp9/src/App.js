import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskDetailPage from './pages/TaskDetailPage';
import CreateTaskPage from './pages/CreateTaskPage';

function App() {
  const [tasksData, setTasksData] = useState([]);

  const addTask = (newTask) => {
    setTasksData([...tasksData, newTask]);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage tasksData={tasksData} addTask={addTask} />}
        />
        <Route path="/tasks/:id" element={<TaskDetailPage tasksData={tasksData} />} />
        <Route path="/create-task" element={<CreateTaskPage addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './COMPONENT/Navbar'

import TaskList from './COMPONENT/Tasklist';
import CreateTask from './COMPONENT/CreateTask';
import EditTask from './COMPONENT/Edittask';


function App() {  
     return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </Router>
  );
  
}

export default App

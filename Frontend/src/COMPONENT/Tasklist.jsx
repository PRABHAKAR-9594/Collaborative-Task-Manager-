import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [assigneeFilter, setAssigneeFilter] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/`, {
        params: {
          status: statusFilter,
          assignto: assigneeFilter.trim()
        }
      });
      setFilteredTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [statusFilter, assigneeFilter]);

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/api/deletetask/${id}`);
    fetchTasks(); // refresh after deletion
  };

  return (
    <div className="container">
      {/* Filter Controls */}
      <div style={{ marginBottom: '1rem' }}>
        <h3>Filter By Status</h3>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="form-select"
          style={{ marginRight: '1rem',width:'120px' }}
        >
          <option value="">All</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      

<h3>Search by Assignee to: </h3>

        <input
          type="text"
          placeholder="Filter by Assignee"
          value={assigneeFilter}
          onChange={(e) => setAssigneeFilter(e.target.value)}
          className="form-input"
          style={{ width: '200px' }}
        />
      </div>

      <h2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'underline' }}>
        All Tasks
      </h2>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map(task => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.assignto}</td>
              <td>{task.status}</td>
              <td>
                <Link to={`/edit/${task._id}`} className="button edit">Edit</Link>
                <button onClick={() => deleteTask(task._id)} className="button delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

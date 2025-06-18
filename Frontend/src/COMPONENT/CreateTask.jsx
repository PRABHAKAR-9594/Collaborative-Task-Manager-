import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
  const [form, setForm] = useState({ title: '', description: '', assignto: '', status: 'To Do' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/createTask', form);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="form-input" required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-input" />
        <input name="assignto" placeholder="Assigned To" value={form.assignto} onChange={handleChange} className="form-input" />
        <select name="status" value={form.status} onChange={handleChange} className="form-select">
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button type="submit" className="button submit">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
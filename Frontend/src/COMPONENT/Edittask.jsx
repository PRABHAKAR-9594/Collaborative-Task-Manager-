import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', assignto: '', status: 'To Do' });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/`).then(res => {
      const task = res.data.find(t => t._id === id);
      if (task) setForm(task);
    });
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/updatetask/${id}`, form);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="form-input" required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="form-input" />
        <input name="assignto" placeholder="Assigned To" value={form.assignto} onChange={handleChange} className="form-input" />
        <select name="status" value={form.status} onChange={handleChange} className="form-select">
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>
        <button type="submit" className="button submit">Update</button>
      </form>
    </div>
  );
};

export default EditTask;

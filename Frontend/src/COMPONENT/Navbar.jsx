import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Task Manager</h1>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
      <div className={`links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>All Tasks</Link>
        <Link to="/create" onClick={() => setMenuOpen(false)}>Create Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link">todo-redux</Link>
        </li>
        <li className="nav-item">
          <Link to="/hooksdatafecthing" className="nav-link">HooksDatafetchingtask</Link>
        </li>
        <li className="nav-item">
          <Link to="/Datafetcherclass" className="nav-link">Datafetcherclass</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/eventHandling" className="nav-link">EventHandling</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/HandleIncrementCallback" className="nav-link">HandleIncrementCallback</Link>
        </li>
        <li className="nav-item">
          <Link to="/Profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/Counter" className="nav-link">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

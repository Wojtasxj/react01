import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Container from './../Container/Container';
import './NavBar.module.scss';


const NavBar = () => {
  return (
    <nav>
      <Container>
        <Link to="/" className="nav-item">
          <span className="fa fa-tasks" />
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorite" className="nav-link">Favorite</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default NavBar;
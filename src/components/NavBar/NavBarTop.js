import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Container from './../Container/Container';
import styles from './NavBar.module.scss';


const NavBar = () => {
  return (
    <nav> 
        <div className={styles.nav}>
          <Link to="/" className={styles.navxitem}>
            <i className={`fa fa-tasks ${styles.icon}`}></i>
          </Link>
          <ul className={styles.navxlist}>
            <li className={styles.navxitem}>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/">Home</NavLink>
            </li>
            <li className={styles.navxitem}>
              <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/favorite">Favorite</NavLink>
            </li>
            <li className={styles.navxitem}>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                to="/about">About</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/" className={styles.navxlink}>Home</Link>
            </li>
            <li className={styles.navxitem}>
              <Link to="/favorite" className={styles.navxlink}>Favorite</Link>
            </li>
            <li className={styles.navxitem}>
              <Link to="/about" className={styles.navxlink}>About</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default NavBar;
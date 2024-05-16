import React from 'react';
import styles from './../Hero/Hero.module.scss';

const PageTitle = ({ children }) => {
  return (
    <h2 className={styles.title}>{children}</h2>
  );
};

export default PageTitle;
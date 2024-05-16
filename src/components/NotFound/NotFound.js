import styles from './../Hero/Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>404 NOT FOUND</PageTitle>
      </div>
    );
  };

  export default NotFound;
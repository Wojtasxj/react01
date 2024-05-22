import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';

const Card = (props) => {
  const { title, isFavorite } = props;

  return (
    <li className={styles.card}>
      <div>
        {title}
      </div>
      <button className={clsx(styles.cardButton, {
        [styles.cardButtonFavorite]: isFavorite,
        })}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    </li>
  );
};

export default Card;
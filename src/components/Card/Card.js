import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(isFavorite);

  const handleClickStar = () => {
    setIsFavoriteLocal(!isFavoriteLocal);
    dispatch(toggleCardFavorite(id));
  };

  const handleClickTrash = () => {
    dispatch(removeCard({ id }));
  };

  return (
    <li className={styles.card}>
      <div>{title}</div>
      <div>
        <i
          className={clsx(
            'fa fa-star-o',
            styles.icon,
            isFavoriteLocal && styles.active
          )}
          onClick={handleClickStar}
        ></i>
        <i
          className={clsx('fa fa-trash', styles.icon)}
          onClick={handleClickTrash}
        ></i>
      </div>
    </li>
  );
};

export default Card;

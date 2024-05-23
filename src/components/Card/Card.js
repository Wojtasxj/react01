import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.cards);
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(isFavorite);

  console.log('Cards:', cards);

  const handleClickStar = () => {
    setIsFavoriteLocal(!isFavoriteLocal);
    dispatch(toggleCardFavorite(id));
  };

  const handleClickTrash = (id) => {
    console.log('Removing card with id:', id);
    dispatch(removeCard(id));
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
          onClick={() => handleClickStar(id)}
        ></i>
        <i
          className={clsx('fa fa-trash', styles.icon)}
          onClick={() => handleClickTrash(id)}
        ></i>
      </div>
    </li>
  );
};

export default Card;

import styles from './Card.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = (props) => {
  const dispatch = useDispatch();
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(props.isFavorite);

  const handleClick = () => {
    setIsFavoriteLocal(!isFavoriteLocal);
    dispatch(toggleCardFavorite(props.id));
  };

  return (
    <li className={styles.card} onClick={handleClick}>
      <div>
        {props.title}
      </div>
      <i className={clsx(
        'fa fa-star-o',
        styles.icon,
        isFavoriteLocal && styles.active
      )}></i>
    </li>
  );
};

export default Card;
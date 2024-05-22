import React from 'react';
import styles from './Favorite.module.scss'
import { connect } from 'react-redux';
import Card from './../Card/Card';
import { getFavoriteCards } from './../../redux/store';

const FavoriteSubpage = (props) => {
  const { favoriteCards } = props;

  return (
    <article className={styles.column}>
            <h2 className={styles.title}>
                FAVORITES
            </h2>
            <ul className={styles.cards}>
              {favoriteCards.map((card) => (
                  <Card key={card.id} {...card} />
                    
                ))}
            </ul>
    </article>
  );
};

const mapStateToProps = (state) => ({
  favoriteCards: getFavoriteCards(state),
});

export default connect(mapStateToProps)(FavoriteSubpage);
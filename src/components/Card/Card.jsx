import React from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({ image, title, price, description, productId }) => {
  return (
    <div className={styles.cardScreen}>
      <img
        src={image}
        alt={title} />
      <div className={styles.cardInfo}>
        <p className={styles.cardInfoName}>
          {title.substring(0, 25)}...
        </p>
        <p className={styles.cardInfoDescription}>
          {description.substring(0, 100)}...
          {/* {description} */}
        </p>
        <p className={styles.CardInfoPrice}>${price} USD</p>
        <Link to={`/product/${productId}`} className={styles.cardInfoButton}>View</Link>
      </div>

    </div>

  );
}

export default Card;

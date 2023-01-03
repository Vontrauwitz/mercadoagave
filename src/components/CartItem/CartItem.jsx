import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.css'
import cartSprite from '../../assets/sprite.svg';

const CartItem = ({ item, removeHandler }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={item.image} alt={item.title} />
      </div>
      <Link to={`/product/${item.product}`} className={styles.cartItemName}>
        <p>{item.title}</p>
      </Link>
      <p className={styles.cartItemPrice}>${item.price}</p>

      <button className={styles.cartItemDeleteBtn}
        onClick={() => removeHandler(item.product)}>
        <svg className={styles.icon}>
          <use href={cartSprite + "#iconmonstr-trash-can-filled"}  ></use>
        </svg>
      </button>
    </div>
  );
}


export default CartItem;

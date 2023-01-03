import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartItem.module.css'

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={item.image} alt={item.title} />
      </div>
      <Link to={`/product/${item.product}`} className={styles.cartItemName}>
        <p>{item.title}</p>
      </Link>
      <p className={styles.cartItemPrice}>${item.price}</p>

      {/* <select className={styles.cartItemSelect}
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >

        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>{x + 1}</option>
        ))}
      </select> */}

      <button className={styles.cartItemDeleteBtn}
        onClick={() => removeHandler(item.product)}>
        <i className='fas fa-trash'></i>
      </button>
    </div >
  );
}


export default CartItem;

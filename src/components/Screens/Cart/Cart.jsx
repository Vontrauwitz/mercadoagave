import React from 'react';
import CartItem from '../../CartItem/CartItem';
import styles from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from './../../../redux/actions/cartActions';
import Swal from 'sweetalert2';


const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  }


  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * 1) + price, 0)
  }

  function handleAlert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your products has been saved 👌🎉',
      showConfirmButton: false,
      timer: 1500
    })
  }


  return (
    <div className={styles.cartScreen}>
      <div className={styles.cartScreenLeft}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to='/'>Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              removeHandler={removeHandler}
            />
          )))}
      </div>
      <div className={styles.cartScreenRight}>
        <div className={styles.cartScreenInfo}>
          <p>Subtotal:</p>
          <p>${getCartSubTotal().toFixed(2)} USD</p>
        </div>
        <div>
          <button onClick={handleAlert} > Proceed To Checkout</button>
        </div>
      </div>
    </div >
  );
}

export default Cart;

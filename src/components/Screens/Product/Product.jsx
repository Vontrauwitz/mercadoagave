/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styles from './Product.module.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions';


const Product = ({ match, history }) => {

  // const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector(state => state.getProductDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    if (product && match.params.id !== product.id) {
      dispatch(getProductDetails(match.params.id))
    }
  }, [dispatch])

  const addToCartHandler = () => {
    dispatch(addToCart(product.id));
    history.push("/cart");
  }

  return (
    <div className={styles.productScreen}>
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
          <div className={styles.productScreenLeft}>
            <div className={styles.leftImage}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.leftInfo}>
              <p className={styles.leftName}>{product.title}</p>
              <p>Price: ${product.price} USD</p>
              <p>Description:
                <br />
                <span>{product.description}</span>
              </p>
            </div>
          </div>
          <div className={styles.productScreenRight}>
            <div className={styles.rightInfo}>
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status:{" "}
                <span>
                  {product.countInStock > 0 ? "In Stock" : "  Out of Stock"}
                </span>
              </p>
              <p>
                <button type='button' onClick={addToCartHandler}>add to cart</button>
              </p>
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Product;

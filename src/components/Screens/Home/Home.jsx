import React from 'react';
import Card from '../../Card/Card';
import styles from './Home.module.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getProducts as listProducts } from '../../../redux/actions/productActions';

const Home = () => {

  const dispatch = useDispatch();


  //probar cambiando el nombre de este getProducts
  const getProducts = useSelector(state => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <div className={styles.homeScreen}>
      <h2 className={styles.homeScreenTitle}>Latest Products</h2>
      <div className={styles.homeScreenProducts} >

        {loading ? (
          <div className={styles.loaderDiv}>
            <span className={styles.loader}>Loading</span>
          </div>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) =>
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              productId={product.id}
            />)
        )}
      </div>
    </div>
  );
}

export default Home;

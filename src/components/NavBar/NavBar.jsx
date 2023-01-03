import React from 'react'
import logo from '../../assets/logoMA2.png'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { filterByCategories } from '../../redux/actions/productActions'
import { useDispatch } from 'react-redux'

const NavBar = ({ click }) => {

  const dispatch = useDispatch();

  function handleFilterCategory(e) {
    e.preventDefault()
    dispatch(filterByCategories(e.target.value))
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.navbarLogo}>
        {/* <h2>Mercado Agave</h2> */}
        <img className={styles.logo} src={logo} alt='logo' />

      </div>

      {/* Links */}
      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/cart" className={styles.cartLink}>
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
            </span>
          </Link>
        </li>
        <li>
          <button className={styles.navItem} onClick={handleFilterCategory} value="All">All</button>
        </li>
        <li>
          <button className={styles.navItem} onClick={handleFilterCategory} value="men's clothing">Men´s</button>
        </li>
        <li>
          <button className={styles.navItem} onClick={handleFilterCategory} value="women's clothing">Women´s</button>
        </li>
        <li>
          <button className={styles.navItem} onClick={handleFilterCategory} value='jewelery'>Jewelery</button>
        </li>
        <li>
          <button className={styles.navItem} onClick={handleFilterCategory} value='electronics'>Electronics</button>
        </li>
        <li className={styles.navItem} >
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>

      {/* Ham Menu */}
      <div className={styles.hamburguerMenu} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default NavBar

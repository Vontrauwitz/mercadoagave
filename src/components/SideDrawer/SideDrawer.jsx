import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css'
import { filterByCategories } from '../../redux/actions/productActions';
import { useDispatch } from 'react-redux';


const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sideDrawer"]

  if (show) {
    sideDrawerClass.push("show")
  }

  const dispatch = useDispatch();

  function handleFilterCategory(e) {
    e.preventDefault()
    dispatch(filterByCategories(e.target.value))
  };

  return <div className={sideDrawerClass.join(" ")}>
    <ul className='sideDrawerLinks' onClick={click}>
      <li>
        <Link to='/cart'>
          <i className='fas fa-shopping-cart'></i>
          <span>
            Go to Cart
          </span>
        </Link>
      </li>
      <li>
        <button className='navItem' onClick={handleFilterCategory} value="All">All</button>
      </li>
      <li>
        <button className='navItem' onClick={handleFilterCategory} value="men's clothing">Men´s</button>
      </li>
      <li>
        <button className='navItem' onClick={handleFilterCategory} value="women's clothing">Women´s</button>
      </li>
      <li>
        <button className='navItem' onClick={handleFilterCategory} value='jewelery'>Jewelery</button>
      </li>
      <li>
        <button className='navItem' onClick={handleFilterCategory} value='electronics'>Electronics</button>
      </li>
      <li>
        <Link to='/'>Shop</Link>
      </li>
    </ul>
  </div>
}

export default SideDrawer;

import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Screens/Home/Home';
import Product from './components/Screens/Product/Product';
import Cart from './components/Screens/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';


function App() {

  const [sideToggle, setSideToggle] = useState(false)


  return (
    <>
      <NavBar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </>
  );
}

export default App;

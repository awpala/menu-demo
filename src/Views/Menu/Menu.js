import React from 'react';
import OrderInput from '../../Components/OrderInput';
import OrderOutput from '../../Components/OrderOutput';
import './Menu.scss';

const Menu = () => (
  <div className="menu">
    <div className="menu-border">
      <h1>Welcome to our restaurant!</h1>
      <OrderInput />
      <OrderOutput />
    </div>
  </div>
);

export default Menu;

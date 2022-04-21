import React from 'react';
import OrderInput from '../../Components/OrderInput';
import OrderOutput from '../../Components/OrderOutput';
import './Menu.scss';

const Menu = () => (
  <div className="Menu">
    <div className="border">
      <h1>Welcome to our restaurant!</h1>
      <OrderInput />
      <OrderOutput />
    </div>
  </div>
);

export default Menu;

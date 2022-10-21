import React from 'react';

import buttonCartArrow from '../../../assets/CartArrow.svg';
import './buttonCart.scss';

function ButtonCart() {
  return (
    <img src={buttonCartArrow} alt="Button menu" className="burgerMenu" />
  );
}

export default ButtonCart;

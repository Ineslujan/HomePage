import React from 'react';

import buttonCartArrow from '../../../assets/CartArrow.svg';
import './buttonCart.scss';

function ButtonCart() {
  return (
    <button type="button">
      <img src={buttonCartArrow} alt="Button menu" className="burgerMenu" />
    </button>
  );
}

export default ButtonCart;

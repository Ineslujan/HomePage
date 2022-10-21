import React from 'react';

import burgerMenu from '../../../assets/hamburgerMenu.svg';
import './buttonMenu.scss';

function ButtonMenu() {
  return (
    <img src={burgerMenu} alt="Button menu" className="burgerMenu" />
  );
}

export default ButtonMenu;

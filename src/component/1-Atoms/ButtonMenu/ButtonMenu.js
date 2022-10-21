import React from 'react';
import { PropTypes } from 'prop-types';

import burgerMenu from '../../../assets/hamburgerMenu.svg';
import './buttonMenu.scss';

function ButtonMenu({ setIsOpen, isOpen }) {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" onClick={handleMenu}>
      <img src={burgerMenu} alt="Button menu" className="burgerMenu" />
    </button>
  );
}

ButtonMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default ButtonMenu;

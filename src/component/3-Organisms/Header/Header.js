import React from 'react';
import { PropTypes } from 'prop-types';

import ButtonCart from '../../1-Atoms/ButtonCart/ButtonCart';
import ButtonMenu from '../../1-Atoms/ButtonMenu/ButtonMenu';
import ButtonUser from '../../1-Atoms/ButtonUser/ButtonUser';

import './header.scss';

function Header({ setIsOpen, isOpen }) {
  return (
    <header className="header">
      <div className="buttonLeft">
        <ButtonMenu setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
      <div className="buttonRight">
        <ButtonCart />
        <ButtonUser />
      </div>
    </header>
  );
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Header;

import React from 'react';
import ButtonCart from '../../1-Atoms/ButtonCart/ButtonCart';
import ButtonMenu from '../../1-Atoms/ButtonMenu/ButtonMenu';
import ButtonUser from '../../1-Atoms/ButtonUser/ButtonUser';

import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="buttonLeft">
        <ButtonMenu />
      </div>
      <div className="buttonRight">
        <ButtonCart />
        <ButtonUser />
      </div>
    </header>
  );
}

export default Header;

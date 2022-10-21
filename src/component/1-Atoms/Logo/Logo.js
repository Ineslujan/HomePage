import React from 'react';
import logo from '../../../assets/logo.svg';

import './logo.scss';

function Logo() {
  return (
    <h1 aria-label="Logo React">
      <img src={logo} alt="site logo" className="logo" />
    </h1>
  );
}

export default Logo;

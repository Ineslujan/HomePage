import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// const svgDir = require.context('!@svgr/webpack!../../../assets');
import icon from '../../../assets/circle.svg';

import './linksMenu.scss';

function LinksMenu({ link /* icon */ }) {
  // console.log(svgDir);

  return (
    <Link to="/" className="linkMenu">
      <img src={icon} alt="" className="linkMenu-icon" />
      <p>
        {link}
      </p>
    </Link>
  );
}

LinksMenu.propTypes = {
  link: PropTypes.string.isRequired,
  // icon: PropTypes.string.isRequired,
};

export default LinksMenu;

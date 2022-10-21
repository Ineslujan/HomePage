import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

// const svgDir = require.context('!@svgr/webpack!../../../assets');

function LinksMenu({ link }) {
  // console.log(svgDir);

  return (
    <Link to="/">
      <li>
        {/* <img src={svgDir(`./${link}.svg`).default} alt="" /> */}
        {link}
      </li>
    </Link>
  );
}

LinksMenu.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinksMenu;

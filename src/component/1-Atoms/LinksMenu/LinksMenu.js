import React from 'react';
import { PropTypes } from 'prop-types';

function LinksMenu({ link }) {
  return (
    <li>{link}</li>
  );
}

LinksMenu.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LinksMenu;

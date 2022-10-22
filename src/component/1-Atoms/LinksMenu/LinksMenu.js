import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import './linksMenu.scss';

function LinksMenu({ link, icon }) {
  return (
    <Link to="/" className="linkMenu">
      <Icon icon={icon} />
      <p>
        {link}
      </p>
    </Link>
  );
}

LinksMenu.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default LinksMenu;

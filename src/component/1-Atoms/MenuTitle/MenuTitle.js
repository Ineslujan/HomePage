import React from 'react';
import { PropTypes } from 'prop-types';
import { v4 as uuid } from 'uuid';

import LinksMenu from '../LinksMenu/LinksMenu';

import './menuTitle.scss';

function MenuTitle({ title, data }) {
  return (
    <li>
      <h2 className="menuTitle">{title.toUpperCase()}</h2>
      {
        data.map((d) => <LinksMenu key={uuid()} link={d.link} icon={d.icon} />)
      }
    </li>
  );
}

MenuTitle.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default MenuTitle;

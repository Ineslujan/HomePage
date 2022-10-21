import React from 'react';
import { v4 as uuid } from 'uuid';

import Logo from '../../1-Atoms/Logo/Logo';
import MenuTitle from '../../1-Atoms/MenuTitle/MenuTitle';

import datas from '../../../datas/datas.json';
import './sideMenu.scss';

function SideMenu() {
  return (
    <aside className="sideMenu">
      <Logo />
      <ul className="menu">
        {
          datas.data.menuTitle.map((data) => (
            <MenuTitle key={uuid()} title={data.title} data={data.links} />
          ))
        }
      </ul>
    </aside>
  );
}

export default SideMenu;

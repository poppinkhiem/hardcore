import React from 'react';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../style/Sidebar.css';
import { SidebarData } from './SidebarData';

function Sidebar() {
;

  return (

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='Sidebar'>
   
        </div>
        <nav className='nav-menu'>
          <ul className='nav-menu-items'>
            <li className='header'>
           <AiIcons.AiFillBank /> <span>E-Cards</span>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </ IconContext.Provider>

  );
}

export default Sidebar;

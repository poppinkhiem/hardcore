import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  { id:1,
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'side-text'
  },
  {
    id:2,
    title: 'Transaction',
    path: '/transaction',
    icon: <FaIcons.FaCartArrowDown  />,
    cName: 'side-text'
  },
  {
    id:3,
    title: 'Card',
    path: '/card',
    icon: <FaIcons.FaRegCreditCard/>,
    cName: 'side-text'
  },
  {
    id:4,
    title: 'Setting',
    path: '/setting',
    icon: < FaIcons.FaTools/>,
    cName: 'side-text'
  },
  {
    id:5,
    title: 'Sign Up',
    path: '/signup',
    icon: <IoIcons.IoMdPeople />,
    cName: 'side-text'
  },
 
];

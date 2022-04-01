import React from "react";
import { FaBtc, FaTools, FaCcVisa } from "react-icons/fa";
export const SidebarData = [
  {
    title: "Transaction",
    icon: <FaBtc />,
    link: "/transaction",
  },
  {
    title: "Cards",
    icon: <FaCcVisa />,
    link: "/card",
  },
  {
    title: "Setting",
    icon: <FaTools />,
    link: "/setting",
  },
  {
    title: "Logout",
    icon: <FaTools />,
    link: "/",
  },
];

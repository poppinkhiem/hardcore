import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <ul>
 {SidebarData.map((side) => {
          return <li>
              <div>{side.title}</div>
              <div>{side.icon}</div>
              </li>;
        })}
      </ul>
    </div>
  );
}

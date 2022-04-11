import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav role="navigation" className="border absolute right-0 top-0">
      <div className="menu">
        {isActive && (
          <div className="overlay" onClick={() => setIsActive(false)} />
        )}
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(!isActive)}
        />

        <ul className="menu-list">
          <li>
            <NavLink to="/">Hakkımda</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Deneyim</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projelerim</NavLink>
          </li>
        </ul>

        <div className="icon">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  );
}

export default Header;

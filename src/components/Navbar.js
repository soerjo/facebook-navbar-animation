import React from "react";

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">{props.children}</ul>
    </nav>
  );
};

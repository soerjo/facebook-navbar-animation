import React, { useState } from "react";

export const MenuIcon = (props) => {
  const [open, setopen] = useState(false);
  return (
    <li>
      <span
        className="icon-button"
        // onBlur={() => setopen(false)}
        onClick={() => setopen(!open)}
      >
        {props.icon}
      </span>
      {/* kasih warisan dropdown dari props */}
      {open && props.children}
    </li>
  );
};

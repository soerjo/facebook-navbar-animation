import { FaPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { FaCaretDown } from "react-icons/fa";

function PlusIcon({ color, styleName }) {
  return (
    <IconContext.Provider value={{ color: color, className: styleName }}>
      <FaPlus />
    </IconContext.Provider>
  );
}
function BellIcon({ color, styleName }) {
  return (
    <IconContext.Provider value={{ color: color, className: styleName }}>
      <FaBell />
    </IconContext.Provider>
  );
}
function MessageIcon({ color, styleName }) {
  return (
    <IconContext.Provider value={{ color: color, className: styleName }}>
      <AiFillMessage />
    </IconContext.Provider>
  );
}
function DownIcon({ color, styleName }) {
  return (
    <IconContext.Provider value={{ color: color, className: styleName }}>
      <FaCaretDown />
    </IconContext.Provider>
  );
}

export { PlusIcon, BellIcon, MessageIcon, DownIcon };

import React, { useState, useEffect, useRef } from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdArrowBack } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

import { CSSTransition } from "react-transition-group";

export const Dropdown = (props) => {
  const [inProp, setinProp] = useState("primary");
  const [heightMenu, setheightMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setheightMenu(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setheightMenu(height);
  }

  const DropdownItem = (props) => {
    return (
      <span
        className="menu-item"
        onClick={() => props.goToMenu && setinProp(props.goToMenu)}
      >
        <span className="left-icon">{props.leftIcon}</span>
        <span className="menu-title">{props.children}</span>
        <span className="right-icon">{props.rightIcon}</span>
      </span>
    );
  };

  return (
    <div className="dropdown" style={{ height: heightMenu }} ref={dropdownRef}>
      <CSSTransition
        in={inProp === "primary"}
        timeout={500}
        classNames="menu"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu-transition">
          <DropdownItem leftIcon={<FaGithub />} rightIcon>
            My Profile
          </DropdownItem>
          <DropdownItem
            leftIcon={<FaGithubAlt />}
            rightIcon={<MdNavigateNext />}
            goToMenu="secondary"
          >
            menu A
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={inProp === "secondary"}
        timeout={500}
        classNames="menu-second"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu-transition">
          <DropdownItem
            leftIcon={<MdArrowBack />}
            goToMenu="primary"
            rightIcon
          />
          <DropdownItem leftIcon={<FaFreeCodeCamp />} rightIcon>
            menu B
          </DropdownItem>
          <DropdownItem leftIcon={<FaFacebookF />} rightIcon>
            menu B
          </DropdownItem>
          <DropdownItem leftIcon={<FaGithubAlt />} rightIcon>
            menu B
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

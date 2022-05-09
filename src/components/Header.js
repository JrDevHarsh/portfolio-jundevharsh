import { useRef } from "react";
import { Logo } from "./Logo";

export const Header = () => {
  const menuList = ["Home", "About", "Skills", "Projects", "Contact"];

  const iconRef = useRef();
  const menuRef = useRef();

  const handleMenuClick = () => {
    iconRef.current.classList.toggle("active");
    menuRef.current.classList.toggle("menu__open");
  };

  const handleRemoveClass = () => {
    iconRef.current.classList.remove("active");
    menuRef.current.classList.remove("menu__open");
  };

  return (
    <header className="top__header">
      <nav className="header__navbar">
        <h1 className="header__title">
          <Logo />
        </h1>
        <div className="hamburger" ref={iconRef} onClick={handleMenuClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="navbar__menu" ref={menuRef}>
          {menuList.map((item, index) => (
            <li
              className="navbar__menu_item"
              key={index}
              onClick={handleRemoveClass}
            >
              <a href={`#${item}`} className="navbar__menu_link">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

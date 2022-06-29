import React from "react";
import "./Header.css";
import iconMenu from "../../images/icon-menu.svg";
import logo from "../../images/logo.svg";
import iconCart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import UserMenu from "./UserMenu";

export default function Header(props) {
  const [showMenu, setShowMenu] = React.useState(false);

  const showMenuHandler = () => {
    setShowMenu(showMenu ? false : true);
  };

  return (
    <header className="container">
      <div className="header-subsection">
        <button className="header-menu" onClick={showMenuHandler}>
          <img src={iconMenu} alt="menu icon" />
        </button>

        <a className="sneakers-link" href="./">
          <img src={logo} alt="sneakers logo" />
        </a>
      </div>

      {showMenu && <div className="user-menu-overlay"></div>}
      <UserMenu
        className={showMenu && "menu-slide"}
        onCloseMenu={showMenuHandler}
      />

      <div className="header-subsection">
        <button className="open-cart" onClick={props.onToggleCart}>
          <img src={iconCart} alt="cart icon" />
          {props.amountInCart >= 1 && (
            <span className="items-in-cart">{props.amountInCart}</span>
          )}
        </button>

        <button className="user-icon">
          <img src={avatar} alt="user avatar" />
        </button>
      </div>
    </header>
  );
}

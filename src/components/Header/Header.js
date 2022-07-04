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
    <header className="header container">
      <div className="header__subsection header__subsection--left flex-sb-c">
        <button className="header__user-menu-btn" onClick={showMenuHandler}>
          <img src={iconMenu} alt="menu icon" />
        </button>

        <a className="header__sneakers-link" href="./">
          <img src={logo} alt="sneakers logo" />
        </a>
        {showMenu && <div className="header__user-menu--overlay"></div>}
        <UserMenu
          className={showMenu && "header__user-menu--slide"}
          onCloseMenu={showMenuHandler}
        />
      </div>

      <div className="header__subsection header__subsection--right flex-sb-c">
        <button className="header__cart-btn" onClick={props.onToggleCart}>
          <img src={iconCart} alt="cart icon" />
          {props.amountInCart >= 1 && (
            <span className="header__items-in-cart">{props.amountInCart}</span>
          )}
        </button>

        <button className="header__user-icon">
          <img src={avatar} alt="user avatar" />
        </button>
      </div>
    </header>
  );
}

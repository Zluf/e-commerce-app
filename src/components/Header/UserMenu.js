import React from "react";
import "./UserMenu.css";
import CloseButton from "../../images/icon-close.svg";

export default function UserMenu(props) {
  return (
    <div className={`user-menu ${props.className}`} style={props.style}>
      <button onClick={props.onCloseMenu}>
        <img src={CloseButton} alt="close button" />
      </button>
      <a href="./">Collections</a>
      <a href="./">Men</a>
      <a href="./">Women</a>
      <a href="./">About</a>
      <a href="./">Contact</a>
    </div>
  );
}

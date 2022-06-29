import React from "react";
import "./Overlay.css";

export default function Overlay(props) {
  return (
    <div className={`backdrop ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

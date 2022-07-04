import React from "react";
import "./Overlay.css";

export default function Overlay(props) {
  return (
    <div
      className={`backdrop ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

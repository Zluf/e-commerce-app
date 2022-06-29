import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={"btn flex-sb-c" + props.className}
    >
      {props.children}
    </button>
  );
}

import React from "react";
import "./Input.css";

export default function Input(props) {
  return (
    <div className="input">
      {props.label && (
        <label for={props.name} className="input__label">
          {props.label}
        </label>
      )}
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="input__box"
      />

      <span className="input__error">{props.error}</span>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  placeholder: ""
};

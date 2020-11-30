import React from "react";
import "./textField.css";

export default function TextField(props) {
  const {
    name,
    value,
    id,
    placeholder,
    handleChange,
    checkValid,
    textFieldTitle,
    invalidTextField,
    // isValid,
    type,
  } = props;
  return (
    <div className="form-group textField-label ">
      <label className="exampleInputEmail1 textField-title">
        {textFieldTitle}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        onChange={handleChange}
        onBlur={checkValid}
        placeholder={placeholder}
        value={value}
        name={name}
      />
      <small id="emailHelp" className="form-text text-muted smaldecor">
        {invalidTextField}
      </small>
    </div>
  );
}

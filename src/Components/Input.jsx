import React from "react";

const Input = ({ label, inputType, inputId, value, onInputChange }) => {
  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={inputType}
        id={inputId}
        name={inputId}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
};

export default Input;

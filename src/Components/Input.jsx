import React from "react";

const Input = ({ label, inputType, inputId, value, onInputChange, name }) => {
  return (
    <div className="flex justify-between items-center">
      <label className="mr-3" htmlFor={inputId}>
        {label}
      </label>
      <input
        type={inputType}
        id={inputId}
        name={name || inputId}
        value={value}
        onChange={onInputChange}
        className={`border-1 rounded-md ${
          inputType === "color" ? "w-10 h-10" : "p-1"
        }`}
      />
    </div>
  );
};

export default Input;

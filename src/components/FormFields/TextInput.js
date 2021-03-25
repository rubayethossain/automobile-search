import React from "react";

function TextInput({ name, className, ...props }) {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        Text Input Label
      </label>
      <input {...props} className={`input ${className}`} name={name} />
    </div>
  );
}

export default TextInput;

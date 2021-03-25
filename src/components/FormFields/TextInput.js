import React from "react";

function TextInput({ name, className, label, ...props }) {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input {...props} className={`input ${className}`} name={name} />
    </div>
  );
}

export default TextInput;

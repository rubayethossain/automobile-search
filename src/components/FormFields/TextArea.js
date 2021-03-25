import React from "react";

function TextArea({ name, className, label, ...props }) {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea {...props} className={`textarea ${className}`} name={name} />
    </div>
  );
}

export default TextArea;

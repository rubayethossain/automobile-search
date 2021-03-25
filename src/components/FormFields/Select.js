import React from "react";

function Select({ name, className, label, options, ...props }) {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <div className="select">
        <select {...props} className={className} name={name}>
          {options.map((opt, key) => (
            <option value={opt.value} key={key}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Select;

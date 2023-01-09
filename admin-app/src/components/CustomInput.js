import React from "react";

const CustomInput = (props) => {
  const { type, label, id, className, name, val, onChang, onBlur } = props;
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChang}
        onBlur={onBlur}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CustomInput;

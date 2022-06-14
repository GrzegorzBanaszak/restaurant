import React from "react";
import "../styles/components/FormField.scss";
const FormField = ({
  inputName,
  inputType = "text",
  formType,
  changeHandler,
  value,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={inputName.toLowerCase()}>{inputName}</label>
      <input
        type={inputType}
        name={formType}
        id={formType}
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default FormField;

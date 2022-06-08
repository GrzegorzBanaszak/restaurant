import React from 'react'
import "../styles/components/FormField.scss";
const FormField = ({inputName,inputType = "text"}) => {
  return (
    <div className='form-field'>
      <label htmlFor={inputName.toLowerCase()}>{inputName}</label>
      <input type={inputType} />
    </div>
  )
}

export default FormField
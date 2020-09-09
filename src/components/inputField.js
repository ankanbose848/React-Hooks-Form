import React from 'react'

const InputField = ({ type, placeholder, name, value, onChange, errors }) => {
    return (
        <div className="input-field">
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            {/* {errors.name && <span className="error">{errors.name}</span>} */}
        </div>
    )
}

export default InputField;
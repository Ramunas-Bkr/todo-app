import React from 'react'
import './Input.scss'

export const Input = ({ placeholderName, inputValue, setValue }) => {
    return (
        <input
            placeholder={placeholderName}
            value={inputValue}
            onChange={e => setValue(e.target.value)}
            type="text"
            className="field"
        />
    )
}

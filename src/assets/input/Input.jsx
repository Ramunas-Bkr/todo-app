import React from 'react'
import './Input.scss'

export const Input = ({placeholderName}) => {
    return (
        <input type="text" className="field" placeholder={placeholderName}>
        </input>
    )
}

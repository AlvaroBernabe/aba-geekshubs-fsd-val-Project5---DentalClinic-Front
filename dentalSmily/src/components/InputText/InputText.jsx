import React from 'react';
import './InputText.css';

export const InputText = ({
    type,
    name,
    placeholder,
    changeFunction,
    validateFunction
}) => {
    return (
        <>
        <input className='inputDesign' type={type} name={name} placeholder={placeholder} onChange={changeFunction} onBlur={validateFunction} />
        </>
    )
}

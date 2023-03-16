import React from 'react';
import './InputText.css';

export const InputText = ({
    className,
    type,
    name,
    placeholder,
    required,
    changeFunction,
    blurFunction
}) => {
    return (
        <>
        <input className={className} type={type} name={name} placeholder={placeholder} required={required}
        onChange={(e)=> changeFunction(e)} onBlur={(e)=>blurFunction(e)}   />
        </>
    )
}

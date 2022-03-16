import React from 'react'
import { Controller } from 'react-hook-form'

const CustomRadio = ({ control, name, type = "text", value }) => {
    let val = value;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange } }) => <input onChange={onChange} name={name} value={val} type={type} />} />
    )
}

export default CustomRadio
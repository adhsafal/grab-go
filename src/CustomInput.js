import React from 'react'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, type = "text" }) => {
    return (
        <Controller
            name={name}
            type={type}
            control={control}
            render={({ field: { value, onChange } }) => <input onChange={onChange} value={value} type={type} />} />
    )
}

export default CustomInput
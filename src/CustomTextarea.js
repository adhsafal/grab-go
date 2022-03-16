import React from 'react'
import { Controller } from 'react-hook-form'

const CustomTextarea = ({ control, name, type = "text", rows, cols }) => {



    return (
        <Controller
            name={name}
            type={type}
            control={control}
            render={({ field: { value, onChange } }) => <textarea onChange={onChange} value={value} rows={rows} style={{ width: '100%' }} />} />
    )
}

export default CustomTextarea
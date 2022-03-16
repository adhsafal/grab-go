import React from 'react'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput'
import CustomRadio from './CustomRadio'
import CustomSelect from './CustomSelect'

const Form = () => {

    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        html: '',
        css: '',
        js: '',
        django: '',
        react: '',
        select: ''
    }

    const { handleSubmit, control } = useForm({ defaultValues })

    const onSubmit = (values) => {
        console.log(values)

    }

    const options = [
        {
            label: 'Intern',
            value: 'intern'
        },
        {
            label: 'Developer',
            value: 'devloper'
        },
        {
            label: 'HR',
            value: 'hr'
        }
    ]



    return (
        <>
            <div className="formWrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="firstname">
                        <span>First Name:</span>
                        <CustomInput name='firstName' control={control} />
                    </div>
                    <div className="lastname">
                        <span>Last Name:</span>
                        <CustomInput name='lastName' control={control} />
                    </div>

                    <div className="email">
                        <span>Email</span>
                        <CustomInput name='email' control={control} type='email' />
                    </div>

                    <div className="radio_gender">
                        <span>Gender</span>
                        <div className="gender">
                            <CustomRadio name='Gender' control={control} type='radio' value='male' /><span>Male</span>
                            <CustomRadio name='Gender' control={control} type='radio' value='female' /><span>Female</span>
                            <CustomRadio name='Gender' control={control} type='radio' value='others' /><span>Other</span>
                        </div>
                    </div>

                    <div className="programmingCheckboxes">
                        <span>Programming</span>
                        <div className="courses">
                            <CustomInput name="html" control={control} type='checkbox' /><span>HTML</span>
                            <CustomInput name="css" control={control} type='checkbox' /><span>CSS</span>
                            <CustomInput name="js" control={control} type='checkbox' /><span>JS</span>
                            <CustomInput name="django" control={control} type='checkbox' /><span>Django</span>
                            <CustomInput name="react" control={control} type='checkbox' /><span>React</span>
                        </div>
                    </div>

                    <div className="selectLevel">
                        <span>Select your level</span>
                        <CustomSelect control={control} options={options} name='select' />

                        <button className='formBtn' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
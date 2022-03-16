import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import CustomTextarea from './CustomTextarea'
import HomeLayout from './HomeLayout'
import SingleBlogs from './SingleBlogs'
import SingleBlogsimport from './SingleBlogs'


const Blogs = () => {

    const defaultValues = {
        title: '',
        slug: '',
        select: 'Fantasy',
        description: '',
        picture: ''
    }


    const { handleSubmit, control } = useForm({ defaultValues })


    const [lists, setLists] = useState([])

    const onSubmit = (values) => {
        const finalValue = { ...values, image: image }
        setLists([...lists, finalValue])
        console.log(values)
    }




    const options = [
        {
            label: 'Fantasy',
            value: 'Fantasy'
        },
        {
            label: 'Horror',
            value: 'Horror'
        },
        {
            label: 'Science and Technology',
            value: 'Science and Technology'
        },
        {
            label: 'Health and Fitness',
            value: 'Health and Fitness'
        },
        {
            label: 'Art and Entertainment',
            value: 'Art and Entertainment'
        },
        {
            label: 'Drama',
            value: 'Drama'
        },
        {
            label: 'Politics',
            value: 'Politics'
        }

    ]

    const [image, setImage] = useState('')

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const upload = useRef(null)

    const uploadImage = () => {
        upload.current.click()
    }

    return (
        <HomeLayout>
            <div className="all">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="blogsWrapper">
                        <div className="blogsTitle">
                            <p className='title'>Title</p>
                            <CustomInput control={control} name='title' />
                        </div>
                        <div className="blogsSlug">
                            <p>Slug</p>
                            <CustomInput control={control} name='slug' />
                        </div>
                        <div className="blogsSlug">
                            <p>Image</p>
                            {image && <img src={URL?.createObjectURL(image)} width='250px' height='300px' alt="Blogs Images" />}
                            <input className='uploadImage' type='file' name="picture" onChange={handleImage} ref={upload} />
                            <span onClick={uploadImage}><i class="fas fa-camera"></i></span>
                        </div>
                        <div className="blogsCategory">
                            <p>Select</p>
                            <CustomSelect control={control} options={options} name='select' />
                        </div>
                        <div className="blogsDescription">
                            <p>Blog Description</p>
                            <CustomTextarea control={control} name='description' rows='10' />
                        </div>
                        <button className="blogsButton" type='submit'>Save</button>
                    </div>
                </form>
                <SingleBlogs datas={lists} />
            </div>
        </HomeLayout>
    )
}

export default Blogs
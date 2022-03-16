import React from 'react'

const SingleBlogs = ({ datas }) => {
    return (
        <div>
            {
                datas.map((item, index) =>
                    <div className="blogs" key={index}>
                        {item.image && <img src={URL?.createObjectURL(item.image)} width='250px' height='300px' alt="Blogs Images" />}


                        <div className="title">
                            <span>Title</span>
                            <p>{item.title}</p>
                        </div>
                        <div className="slug">
                            <span>Slug</span>
                            <p>{item.slug}</p>
                        </div>
                        <div className="select">
                            <span>Select</span>
                            <p>{item.select}</p>
                        </div>
                        <div className="description">
                            <span>Description</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SingleBlogs
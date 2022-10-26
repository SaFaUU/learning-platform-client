import React from 'react';

const CourseCard = (props) => {
    // console.log(props)
    // hover:border hover:border-sky-700 hover:border-8
    const { title, img_url, info } = props.course;
    return (
        <div className="card w-96 bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-150">
            <figure><img className='h-80' src={img_url} alt="card" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-left'>{info.slice(0, 150)}...</p>
                <div className="card-actions justify-end">
                    <div className="badge p-3">Fashion</div>
                    <div className="badge p-3">Products</div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
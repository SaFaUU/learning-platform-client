import React from 'react';

const CourseCard = (props) => {
    const { title, img_url, info, category_1, category_2 } = props.course;
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
                    <div className="badge py-3 px-5">{category_1}</div>
                    <div className="badge py-3 px-5">{category_2}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
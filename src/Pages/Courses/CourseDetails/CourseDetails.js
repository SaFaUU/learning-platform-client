import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData();
    const { title, img_url, info, id } = data
    return (
        <div className='flex justify-center align-middle w-full mt-5'>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl">
                <figure><img src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center font-bold text-4xl">{title}</h2>
                    <p>{info}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout/${id}`} className="btn btn-primary w-full">
                            Buy Now
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CourseDetails;
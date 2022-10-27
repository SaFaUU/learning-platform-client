import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { HiArrowCircleDown } from "react-icons/hi";
import ReactToPdf from "react-to-pdf";

const CourseDetails = () => {
    const data = useLoaderData();
    const { title, img_url, info, id } = data

    return (
        <ReactToPdf x={1} y={1} scale={0.4}>
            {({ toPdf, targetRef }) => (
                <div ref={targetRef} className='flex justify-center align-middle w-full mt-5'>
                    <div className="card card-compact w-4/5 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='flex align-middle justify-between'>
                                <h2 className="card-title justify-center font-bold text-4xl">{title}</h2>
                                <button className="flex btn btn-ghost normal-case p-2 rounded-lg text-lg font-bold align-middle justify-center hover:scale-105" onClick={toPdf}>Download the PDF
                                    <HiArrowCircleDown className='text-4xl ml-3'></HiArrowCircleDown>
                                </button>
                            </div>
                            <figure><img src={img_url} alt="Shoes" /></figure>

                            <p className='text-left'>{info}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/checkout/${id}`} className="btn btn-primary w-full bg-blue-600">
                                    Get premium access
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </ReactToPdf>
    );
};

export default CourseDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideBar = (props) => {
    console.log(props)
    const { title, info, img_url, id } = props.selected;
    return (
        <div className='sticky top-24 mb-16 w-5/6 lg:block hidden justify-center mx-auto mt-16 pt-5 bg-slate-100 px-4 rounded-lg h-3/5'>
            <h2 className='text-md font-semibold whitespace-normal w-full'>Here are the Details for your Selected Course</h2>
            <div className="drawer drawer-mobile flex flex-col w-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side mx-auto mt-5 px-3 text-left">
                    <label htmlFor="my-drawer-2" className="drawer-overlay "></label>
                    <h4 className='font-bold text-xl'>{title}</h4>
                    {
                        img_url ?
                            <img className='' src={img_url} alt="card" />
                            :
                            <p>Please Select an Item</p>
                    }

                    {
                        info !== undefined ?
                            <>
                                <h3 className='font-bold mt-4'>Description</h3>
                                <p className='text-xs mb-4'>{info.slice(0, 950)}</p>
                                <Link to={`/checkout/${id}`} className="btn btn-primary w-full">
                                    Buy Now
                                </Link>
                            </>
                            :
                            <></>
                    }

                </div>
            </div>
        </div>
    );
};

export default CourseSideBar;
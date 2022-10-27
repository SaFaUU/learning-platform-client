import React from 'react';
import { Link } from 'react-router-dom';

const CourseSideBar = (props) => {
    // console.log(props)
    // const data = useLoaderData();
    const { courses } = props;
    return (
        <div className='sticky top-24 mb-16 w-5/6 lg:block hidden justify-center mx-auto mt-16 pt-5 bg-sky-100 px-4 rounded-lg h-1/3'>
            <h2 className='text-md font-semibold whitespace-normal w-full'>Here are the Details of All the Course</h2>
            <div className="drawer drawer-mobile flex flex-col w-full">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side mx-auto mt-5">
                    <ul className="menu bg-base-100 w-72">
                        {
                            courses.map((course, idx) => <li><Link to={`/courses/${idx}`}>{course.title}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseSideBar;
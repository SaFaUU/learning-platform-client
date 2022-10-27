import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import CourseSideBar from '../CourseSideBar/CourseSideBar';

const Courses = () => {
    const courses = useLoaderData();
    const [selected, setSelected] = useState({});
    const handleSelect = (event) => {
        event.target.style.background = 'red';
        // console.log(event);
        setSelected(selected);
    }
    return (
        <div className='flex lg:justify-center justify-center'>
            <div className='grid xl:grid-rows-2 md:grid-rows-3 grid-rows-6 grid-flow-col gap-5 justify-center mb-16 mt-16'>
                {
                    courses.map((course, idx) => {
                        return <Link
                            onPointerEnter={() => {
                                console.log('selected course');
                                // console.log(course);
                                setSelected(course);

                            }}
                            to={`/courses/${idx}`}
                        >
                            <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>
                        </Link>
                    })

                }
            </div>
            <div className='w-1/5 px-0 lg:block hidden'>
                <CourseSideBar
                    courses={courses}
                    selected={selected}
                ></CourseSideBar>
            </div>
        </div>
    );
};

export default Courses;
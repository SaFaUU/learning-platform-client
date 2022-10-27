import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../../layout/Main';
import Blog from '../../Pages/Blog/Blog';
import Checkout from '../../Pages/Checkout/Checkout';
import CourseDetails from '../../Pages/Courses/CourseDetails/CourseDetails';
import Courses from '../../Pages/Courses/Courses/Courses';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Faq from '../../Pages/Faq/Faq';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => {
                    return fetch('https://learning-platform-server-safauu.vercel.app/courses')
                },
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:courseId',
                loader: ({ params }) => {
                    return fetch(`https://learning-platform-server-safauu.vercel.app/courses/${params.courseId}`)
                },
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:courseId',
                loader: ({ params }) => {
                    return fetch(`https://learning-platform-server-safauu.vercel.app/checkout/${params.courseId}`)
                },
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
        ]
    }
])
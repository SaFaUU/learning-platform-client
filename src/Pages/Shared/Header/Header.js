import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { HiUser } from "react-icons/hi";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className=" bg-white px-3 py-2 w-auto">
            <div className='navbar flex mx-auto justify-between '>
                <div className="">

                    <Link className="btn btn-ghost normal-case text-xl">
                        <img className='w-20' src="svg-ascii-logo.svg" alt="" srcSet="" />
                    </Link>
                </div>
                <div className=' font-sans text-gray-800'>
                    <button className="btn btn-ghost normal-case p-2 rounded-box w-28 px-3 py-2 rounded-md text-lg font-bold">
                        <Link to='/'>Home</Link>
                    </button>
                    <button className="btn btn-ghost normal-case p-2 rounded-box w-28 px-3 py-2 rounded-md text-lg font-bold">
                        <Link to='/courses'>Courses</Link>

                    </button>
                    <button className="btn btn-ghost normal-case p-2 rounded-box w-28 px-3 py-2 rounded-md text-lg font-bold">
                        <Link to='/blog'>Blog</Link>

                    </button>
                    <button className="btn btn-ghost normal-case p-2 rounded-box w-28 px-3 py-2 rounded-md text-lg font-bold">
                        <Link to='/faq'>FAQ</Link>

                    </button>

                </div>
                <div>
                    {user?.uid ?
                        <div className="flex-none gap-2">
                            <div className="dropdown dropdown-end">
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || 'Name not Available'}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-14 rounded-full">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} alt='Profile' />
                                                    :
                                                    <HiUser className='text-5xl w-25'></HiUser>
                                            }
                                        </div>
                                    </label>
                                </div>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </Link>
                                    </li>
                                    <li><Link>Settings</Link></li>
                                    <li onClick={logOut}><Link>Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                        :
                        <div className='mr-4 font-sans text-gray-800'>
                            <button className="btn btn-ghost normal-case p-2 rounded-box w-20 px-1 py-2 text-lg font-bold">
                                <Link to='/login'>Login</Link>

                            </button>
                            <button className="btn btn-ghost normal-case p-2 rounded-box w-20 px-1 py-2 text-lg font-bold">
                                <Link to='/register'>Register</Link>

                            </button>
                        </div>
                    }
                    <input type="checkbox" className="toggle ml-4" />
                </div>
            </div>
        </div>
    );
};

export default Header;
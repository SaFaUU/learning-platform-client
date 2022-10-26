import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err);
            })
    }
    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <p className="py-6 w-80 text-center pb-2">Please Provide your necessary details and Login</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Dont have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button type='submit' className="btn btn-primary bg-blue-600">Login</button>
                            </div>
                        </form>
                        <div className="form-control">

                            <button onClick={handleGoogleSignIn} className="btn btn-outline mb-2">Login with Google <FaGoogle className='ml-3  text-lg'></FaGoogle></button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline">Login with Github <FaGithub className='ml-3 text-lg'></FaGithub></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
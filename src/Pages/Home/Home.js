import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div>
                <div className="hero" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/company-providing-management-training-office-space-business-incubator-business-training-programs-shared-administrative-service-concept_335657-2152.jpg")`, height: '400px' }}>
                    <div className="hero-overlay bg-opacity-60 bg-black"></div>
                    <div className="hero-content text-center tsext-neutral-content ">
                        <div className="max-w-xlg text-white">
                            <h1 className="mb-2  text-3xl font-bold">Welcome ASCII Academy</h1>
                            <p className="mb-3">JS has become one of the most powerful programming languages and with widespread usage of internet, it everyday serves billions of people's worldwide.This is the best website you can visit to get all your favourite courses from the best all in one place</p>
                            <div className='flex justify-center'>
                                <button className="btn bg-blue-600 btn-md mr-4">Explore Courses</button>
                                <Link className="btn bg-blue-600 btn-md" to='/blog'>
                                    <button>Visit Our Blogs</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' align-middle'>
                <div className="hero bg-base-200 w-auto">
                    <div className="hero-content flex-col lg:flex-row mt-5 justify-around">
                        <img src="https://img.freepik.com/free-vector/financial-obligation-document-promissory-bill-loan-agreement-debt-return-promise-issuer-payee-signing-contract-businessmen-making-deal_335657-848.jpg?w=740&t=st=1666700216~exp=1666700816~hmac=4b7940b3f769b69d5d99cf5b5e557b89283b6a1d8155a0ffe97bea386bea6ceb" className="max-w-md rounded-lg shadow-md" />
                        <div className='w-2/4 border-0'>
                            <h1 className="text-5xl font-bold">Learn Programming!</h1>
                            <p className="py-6 mx-0 w-3/4 sm:mx-auto">With our comprehensive tutors and tutorial you will be on your way to become the best Progammer there is.</p>
                            <Link className="btn btn-primary bg-blue-600" to='/courses'>
                                <button>Browse Courses</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200 w-auto pl-0">
                    <div className="hero-content flex-col lg:flex-row flex-col-reverse mt-5 justify-around">
                        <div className='w-2/4'>
                            <h1 className="text-5xl font-bold">Get Productive</h1>
                            <p className="py-6 mx-0 w-3/4  sm:mx-auto">With our comprehensive tutors and tutorial you will be on your way to become the best Progammer there is.</p>
                            <Link to='blog'><button className="btn btn-primary bg-blue-600">Visit Blog Site</button></Link>
                        </div>
                        <img src="https://img.freepik.com/free-vector/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg?w=740&t=st=1666700202~exp=1666700802~hmac=e352cbbabda5e1bbe5aba9534d0ae630478413cbc086ac139f0a8d2858744ec4" className="max-w-md rounded-lg shadow-md" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
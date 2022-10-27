import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const data = useLoaderData()
    const { title, img_url, info, id } = data
    return (
        <div className="my-32 card w-96 bg-base-100 shadow-xl justify-center align-middle mx-auto">
            <figure className="px-10 pt-10">
                <img src={img_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <p>ASCII is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>

                <Link className="btn btn-primary w-full mt-2" to='/courses'><button>Checkout</button></Link>
            </div>

        </div>
    );
};

export default Checkout;
import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto my-11">
                <figure><img src="https://simplelocalize.io/blog/what-is-cors.jpg" alt="Album" className='w-72' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">What is cors?</h2>
                    <p className='text-left'>Cors means Cross Origin Resource Sharing. When we are running both the server and client side on our own pc because of security reasons the computer don't allow the opening of multiple ports so the API data won't be available to the client when working offline. So to mitigate this we use cors.</p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto my-11">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgo80ONtLRaDIae2kDgH6Wo5M9eVmMS279UCKCB5WWiHCouXlYaZ-MHuaJv0LeSo9b54&usqp=CAU" alt="Album" className='w-72' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-left">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className='text-left'>We are using Firebase to authenticate our users. Doing it manually with database is a lot complicated so to make it easier we ase using firebase. There are a lot of alternatives that are simillar to Firebase they are: MongoDB, Oracle Database, Amazon Redshift.
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto my-11">
                <figure><img src="https://i.ytimg.com/vi/y6S26FiwEy4/maxresdefault.jpg" alt="Album" className='w-72' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-left">How does the private route work?</h2>
                    <p className='text-left'>Private Route means routes that are only accessible when certain criterias are met for example if a user is a member of the website. When someone tries to access the secure routes we first try to authenticate them if they are not authenticated already and check with our pre defined conditions if they can be allowed on the specified route. If all the conditions are met we then render the children element and send it to user.
                    </p>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto my-11">
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlgo80ONtLRaDIae2kDgH6Wo5M9eVmMS279UCKCB5WWiHCouXlYaZ-MHuaJv0LeSo9b54&usqp=CAU" alt="Album" className='w-72' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-left">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className='text-left'>We are using Firebase to authenticate our users. Doing it manually with database is a lot complicated so to make it easier we ase using firebase. There are a lot of alternatives that are simillar to Firebase they are: MongoDB, Oracle Database, Amazon Redshift.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
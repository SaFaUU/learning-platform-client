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
                <figure><img src="data:image/png;base64,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" alt="Album" className='w-72' /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl text-left">What is Node? How does Node work?</h2>
                    <p className='text-left'>Node allows web developers to run Javascript file on the backend with the help of virtual engine. Previuosly there was no way run Javascript code on the backend but with the launch of nodejs and V8 engine which was written in C++ developers can now run JavaScript code on the backend.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;
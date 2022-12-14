import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Oops!</h1>
                        <p className="py-6">Sorry, an unexpected error has occurred.</p>
                        <p>{error.statusText || error.message}</p>
                        <Link to='/' className="btn btn-primary mt-5 bg-blue-600">
                            <button>Go Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
            <p></p>
            <p>

            </p>
        </div>
    );
}
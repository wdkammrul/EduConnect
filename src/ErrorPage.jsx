import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="items-center text-center mt-48">
            <h1 className="text-5xl text-primary">404</h1>
            <h1 className="text-4xl my-6">Not Found !</h1>
            <Link to="/"><button className="btn btn-primary">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;
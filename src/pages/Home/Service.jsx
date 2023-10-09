/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// step-4 
const Service = ({service}) => {

    console.log(service.name)

    const { name, id, image, price, description,button } = service

    return (
        <div>
            {/* step-5 next step-6 Login */}
            <div className="card card-compact mx-auto w-96 md:w-[340px] lg:w-full h-[320px] bg-base-100 shadow-xl">
                <figure><img className="w-full h-60" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-start">
                        <Link to={`/service/${id}`}>
                            <button className="btn btn-primary">{button}</button>
                         </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
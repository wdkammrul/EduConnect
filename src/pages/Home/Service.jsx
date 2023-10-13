/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

// import { Link } from "react-router-dom";

// step-4 
const Service = () => {

    // console.log(service.name)
    const [singleService, setSingleService] = useState(null)
    const services = useLoaderData()
    const { id } = useParams()

    useEffect(() => {
        const aService = services.find(service => service.id === parseInt(id))
        setSingleService(aService)
    }, [id, services])

    // const { name, id, image, price, description,button } = service

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={singleService?.image} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{singleService?.name}</h1>
                    <p className="py-6">{singleService?.description}</p>
                    <button className="btn btn-primary">{singleService?.button}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;
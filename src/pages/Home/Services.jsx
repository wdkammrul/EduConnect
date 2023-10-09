/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import Service from "./Service";
import { Link } from "react-router-dom";
import Service from "./Service";
import { useEffect, useState } from "react";
// import Service from "./Service";

const Services = () => {
    // console.log(service)

    // const { name, id, image, price, description, button } = service
          
    // step-2 
    // const services = useLoaderData()
    // console.log(services)



    // step-1 
    const [services, setServices] = useState([]);

    // step-2 
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data)) 
    , []})

    return (
        <div>
            {/* <div>
                <h1 className="text-5xl my-10 text-center">Services</h1>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {/* <h1>All Services: {services.length}</h1> */}

                {/* step-3  */}
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                 }


                {/* {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                } */}


                {/* <div className="card card-compact mx-auto w-96 md:w-[340px] lg:w-full h-[320px] bg-base-100 shadow-xl">
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
                </div> */}

            </div>
        </div>

    );
};

export default Services;
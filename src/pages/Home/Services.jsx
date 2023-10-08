import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {

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
            <div>
                <h1 className="text-5xl my-10 text-center">Services</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                {/* <h1>All Services: {services.length}</h1> */}

                {/* step-3  */}
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }

            </div>
        </div>
        
    );
};

export default Services;
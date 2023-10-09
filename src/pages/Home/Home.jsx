import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

import Services from "./Services";
import AboutUs from "../AboutUs";

const Home = () => {

    const services = useLoaderData()
    console.log(services)

    return (
        <div>
            <Banner></Banner>
            <div>
                <h1 className="text-5xl my-10 text-center">Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
                {
                    services?.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
                {/* <Services></Services>*/}
            </div>

            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
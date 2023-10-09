// import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

// import Services from "./Services";
import AboutUs from "../AboutUs";
// import Service from "./Service";
import Services from "./Services";

const Home = () => {

    // const services = useLoaderData()
    // console.log(services)

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
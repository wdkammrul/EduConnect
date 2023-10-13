// import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";

// import Services from "./Services";
import AboutUs from "../AboutUs";
// import Service from "./Service";
import Services from "./Services";
import ContactUs from "./ContactUs";

const Home = () => {

    // const services = useLoaderData()
    // console.log(services)

    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
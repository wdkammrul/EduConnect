import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Banner from "../pages/Home/Banner";
import Services from "../pages/Home/Services";
import Footer from "../pages/Home/Footer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage";
import PrivateRouts from "./PrivateRouts";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Home/ContactUs";
import Service from "../pages/Home/Service";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // step-1 
                // loader: () => fetch('/services.json')
            },
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/services',
                element: <Services></Services>,

            },
            {
                path: '/service/:id',
                element: <PrivateRouts><Service></Service></PrivateRouts>,
                loader: () => fetch('/services.json')
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <PrivateRouts><ContactUs></ContactUs></PrivateRouts>
            }

        ]
    }
])

export default router;
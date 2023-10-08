import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Banner from "../pages/Home/Banner";
import Services from "../pages/Home/Services";
import Footer from "../pages/Home/Footer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/banner',
                element: <Banner></Banner>
            },
            {
                path: '/services',
                element: <Services></Services>
            }, 
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ]
    }
])

export default router;
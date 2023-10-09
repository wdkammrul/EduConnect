import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Banner from "../pages/Home/Banner";
import Services from "../pages/Home/Services";
import Footer from "../pages/Home/Footer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
           
        ]
    }
])

export default router;
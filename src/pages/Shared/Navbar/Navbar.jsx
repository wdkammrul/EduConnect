import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {

    // step-17 
    const { user, logOut } = useContext(AuthContext)

    // step-19 
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/banner'>Banner</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>

    </>

    return (
        <div className="navbar mt-6 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-secondary lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co/NpTFKhC/download.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {/* step-18  */}
                {
                    user ?

                        // step-20 next step-21 AuthProvider
                        // <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"> 
                                <li><a>{user.email}</a></li>
                                <li onClick={handleSignOut}><a>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-primary">Log In</button>
                        </Link>
                }

            </div>
        </div >
    );
};

export default Navbar;
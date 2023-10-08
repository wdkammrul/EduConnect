import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Login = () => {

    // step-23 
    const {signIn} = useContext(AuthContext)


    // step-1 
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // step-24 
        signIn(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })
        
    }


    return (
        <div>
            <div className="mx-auto">

                {/* step-2  */}
                <form onSubmit={handleLogin} className="w-3/4 md:w-3/4 lg:w-1/2 mx-auto bg-slate-800 rounded-lg p-4 mt-10">
                    <div className="form-control">
                        <h2 className="text-3xl text-center my-6">Please Login</h2>
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Log In</button>

                        <label className="label mx-auto mt-6 ">
                            <a href="#" className="label-text-alt link link-hover text-violet-500 hover:text-red-500 font-bold">Forgot password?</a>
                        </label>
                        <br />
                        <span className="border"></span>
                        <br />
                        <p className="text-center mb-2">No account? Please <Link to='/register'> <span className="text-violet-500  underline font-extrabold">Register</span></Link></p>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Login;
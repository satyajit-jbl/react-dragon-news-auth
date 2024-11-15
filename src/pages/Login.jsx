import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Result } from "postcss";


const Login = () => {
    const {userLogIn, setUser} = useContext(AuthContext);
    const[error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({email,password});
        userLogIn(email, password)
        .then(result=>{
            const user = result.user 
            setUser(user);
            navigate(location?.state ? location.state : "/")
        })
        .catch((err)=>{
            // const errrorCode = error.code;
            // const errorMessage = error.message;
            // alert(error.code)
            setError({...error, login:err.code})
        })
    }
    
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-red-600 text-sm">
                            {error.login}
                        </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Don't have An Account ? <Link className="text-red-600" to="/auth/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;
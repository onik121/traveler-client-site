import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Register = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="hero flex flex-col items-center justify-center min-h-[700px] max-w-[1440px] mx-auto px-5">
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse p-0 w-full gap-x-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-black title">Register your account</h1>
                    <p className="py-6 login-details">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none">
                    <form className="card-body form">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Name</span>
                            </label>
                            <input type="text" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Your Email</span>
                            </label>
                            <input type="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input type={show ? 'text' : 'password'} className="input input-bordered w-full" name="password" required />
                                <span className="cursor-pointer -ml-7" onClick={() => setShow(!show)}>{show ? <FaEye></FaEye> : <FaEyeSlash />}</span>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button>Register</button>
                        </div>
                        <p className="text-center mt-4">Do Have An Account ? <span className="font-semibold text-[#4482ff]"><Link to={'/login'}>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;<h1 className="text-2xl"></h1>
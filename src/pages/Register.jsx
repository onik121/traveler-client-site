import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContentx } from "../provider/AuthProvider";
import toast from 'react-hot-toast';
import { updateProfile } from "firebase/auth";
import { Scroll } from "../components/Scroll";

const Register = () => {

    const { createUser } = useContext(AuthContentx)
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters')
            return;
        }
        else if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            toast.error('At least one uppercase and lowercase letter')
            return;
        }
        createUser(email, password)
            .then(result => {
                toast.success('Successfull')
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        navigate('/')
                        form.reset();
                    })
            })
            .catch(error => {
                toast.error(error.code)
                form.reset();
            })
    }
    

    return (
        <div className="hero flex flex-col items-center justify-center min-h-[700px] max-w-[1440px] mx-auto px-5">
            <Scroll></Scroll>
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse p-0 w-full gap-x-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold title text-color">Register your account</h1>
                    <p className="py-6 login-details text-color">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none">
                    <form className="card-body form" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-color">Your Name</span>
                            </label>
                            <input type="text" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-color">Photo URL</span>
                            </label>
                            <input type="text" className="input input-bordered" name="photo" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-color">Your Email</span>
                            </label>
                            <input type="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold text-color">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input type={show ? 'text' : 'password'} className="input input-bordered w-full" name="password" required />
                                <span className="cursor-pointer -ml-7" onClick={() => setShow(!show)}>{show ? <FaEye></FaEye> : <FaEyeSlash />}</span>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button>Register</button>
                        </div>
                        <p className="text-center mt-4 text-color">Do Have An Account ? <span className="font-semibold text-[#4482ff]"><Link to={'/login'}>Login</Link></span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register; <h1 className="text-2xl"></h1>
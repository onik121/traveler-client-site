import { Link, useLocation, useNavigate } from "react-router-dom";
import facebook from '../assets/facebook.png'
import google from '../assets/goole.png'
import { useContext } from "react";
import { AuthContentx } from "../provider/AuthProvider";
import toast from 'react-hot-toast';
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {

    const { loginUser } = useContext(AuthContentx);
    const navigate = useNavigate();
    const location = useLocation();
    const googlrProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then( () => {
                form.reset()
                navigate(location?.state ? location.state : '/')
                toast.success('Login Successfull')
            })
            .catch(error => {
                toast.error(error.code)
                form.reset();
            })
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googlrProvider)
            .then(() => {
                toast.success('Successfully login')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.code)
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(() => {
                toast.success('Successfully login')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                toast.error(error.code)
            })
    }

    return (
        <div className="hero flex flex-col items-center justify-center min-h-[650px] max-w-[1440px] mx-auto px-5">
            <div className="flex items-center justify-center flex-col lg:flex-row-reverse p-0 w-full gap-x-20">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-black title">Login your account</h1>
                    <p className="py-6 login-details">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl rounded-none">
                    <div className="card-body">
                        <form className="form" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Your Email</span>
                                </label>
                                <input type="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <div className="flex items-center">
                                    <input type="password" className="input input-bordered w-full" name="password" required />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button>Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-2">or use one of these options</p>
                        <div className="flex gap-4 justify-center login-option mt-2">
                            <button onClick={handleGoogleLogin}><img src={google} alt="Google" /></button>
                            <button onClick={handleFacebookLogin}><img src={facebook} alt="Facebook" /></button>
                        </div>
                        <p className="text-center mt-4">Dont’t Have An Account ? <span className="font-semibold text-[#4482ff]"><Link to={'/register'}>Register</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
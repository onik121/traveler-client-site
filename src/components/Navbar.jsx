import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import { useContext } from "react";
import { AuthContentx } from "../provider/AuthProvider";
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContentx);

    const navlinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>Tourists Spot</NavLink></li>
        <li><NavLink to={'/about'}>My List</NavLink></li>
        <li><NavLink to={'/about'}>Add</NavLink></li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(
                toast.success('Logout Successfull')
            )
    }

    return (
        <div className="navbar p-0 mb-3 fixed z-50 bg-white">
            <div className="navbar max-w-[1440px] mx-auto px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-3 btn px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to={'/'}><img className="w-[180px]" src={logo}></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal gap-5">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    {
                        user &&
                        <div className="w-9 tooltip tooltip-bottom cursor-pointer" data-tip={user?.displayName}>
                            {
                                user && <img className="rounded-full w-[35px] h-[35px]" src={user?.reloadUserInfo?.photoUrl} />
                            }
                        </div>
                    }
                    {user ? <button onClick={handleLogOut} className="login-btn">Logout</button> : <Link to={'/login'}><button className="login-btn">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
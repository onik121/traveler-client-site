import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContentx } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContentx);
    const location = useLocation();

    if(loading) {
        return <div className="h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>;
    }

    if(user) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};


export default PrivateRoute;
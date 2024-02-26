import {useSelector} from "react-redux";
import {Navigate,useLocation} from "react-router-dom";

export default function PrivateRoute({children}){

    const { AdminAccessToken } = useSelector((state) => state.auth);
    let sessionToken= sessionStorage.getItem('AdminAuthToken');
    const location =useLocation();

    if(!AdminAccessToken && !sessionToken){
        return <Navigate to={'/auth/sign-in'} state={{
            return_url:location.pathname + location.search
        }}/>
    }
    return children;

}
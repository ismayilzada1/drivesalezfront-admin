import React from "react";
import "./Home.css";
import {useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

const Home = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate=useNavigate();


    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         navigate('/');
    //     }
    // }, [isLoggedIn, navigate]);
    //
    // if (!isLoggedIn) {
    //     return null;
    // }


    return (
            <div className={'wrapper'}>

                <div id="content-page" className="content-page">
                <h1>HOME PAGE</h1>
                </div>
            </div>
    );
};


export default Home;
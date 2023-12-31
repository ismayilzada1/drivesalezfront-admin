import React, {useState} from "react";
import "./SignIn.css";
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loginStaff} from '../../../Store/Auth/AuthActions';
import Logo from "../../../Components/ui/Logo";

const SignIn = () => {
    const dispatch = useDispatch ();
    const navigate = useNavigate ();

    const {loading, error} = useSelector ((state) => state.auth);

    const [Email, setEmail] = useState ('');
    const [Password, setPassword] = useState ('');

    const [showAlert, setShowAlert] = useState (true);

    const [rememberMe, setRememberMe] = useState (false);

    const handleRememberMeChange = () => {
        setRememberMe (!rememberMe);
    };

    const handleSignIn = async (e) => {
        if (!Email || !Password) {
            return;
        }
        e.preventDefault ();
        const credentials = {
            userName: Email,
            password: Password,
        };

        const response = await dispatch (loginStaff (credentials, rememberMe));
        console.log (response);
        if (response && response.status === 200 && response.data.userRole === 'Admin') {
            navigate ('/dashboard-admin');
        } else if (response && response.status === 200 && response.data.userRole === 'Moderator') {
            navigate ('/dashboard-moderator');
        } else {
            setShowAlert (true);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert (false);
    };




    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                <div className="col-md-6 sign-in-container">
                    <div className="login d-flex align-items-center py-5">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                        <Logo size={"140px"}/>
                                    <form>
                                        <h1 className={'text-center m-2'}>Admin Login</h1>
                                        <div className="form-group mb-3">
                                            <input id="inputEmail" value={Email}
                                                   onChange={(e) => setEmail (e.target.value)} type="email"
                                                   placeholder="Email address" required="" autoFocus=""
                                                   className="form-control  rounded-pill shadow-sm px-4"/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" value={Password}
                                                   onChange={(e) => setPassword (e.target.value)} type="password"
                                                   placeholder="Password" required=""
                                                   className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                        </div>

                                        <div className="form-group">
                                            <div className="form-check m-2">
                                                <input type="checkbox" className="form-check-input" id="checkMe" checked={rememberMe} onChange={handleRememberMeChange} />
                                                <label className="form-check-label" htmlFor="checkMe">Remember Me?</label>
                                            </div>

                                        </div>




                                        <button type="submit" onClick={handleSignIn} disabled={loading}
                                                className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">
                                            {loading ? "Signing in..." : "Sign in"}
                                        </button>

                                        {(showAlert && error && (
                                            <div className="alert text-white bg-danger" role="alert">
                                                <div className="iq-alert-icon">
                                                    <i className="ri-information-line"></i>
                                                </div>
                                                <div className="iq-alert-text">{error}</div>
                                                <button
                                                    type="button"
                                                    className="close"
                                                    aria-label="Close"
                                                    onClick={handleCloseAlert}
                                                >
                                                    <i className="ri-close-line"></i>
                                                </button>
                                            </div>


                                        ))}


                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );

};

export default SignIn;

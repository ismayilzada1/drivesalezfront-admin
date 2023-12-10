import React, {useState}from "react";
import "./SignIn.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Store/Auth/AuthActions';

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => state.auth);

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        const credentials = {
            userName: Email,
            password: Password,
        };
        // const response=await dispatch(login(credentials));
        //
        // if(response){
        //     navigate('/');
        // }
    };


    return (
       <>
           <section className="sign-in-page bg-white">
               <div className="container-fluid p-0">
                   <div className="row no-gutters">
                       <div className="col-sm-6 align-self-center">
                           <div className="sign-in-from">
                               <h1 className="mb-0">Sign in</h1>
                               <p>Enter your email address and password to access admin panel.</p>
                               <form className="mt-4">
                                   <div className="form-group">
                                       <label htmlFor="exampleInputEmail1">Email address</label>
                                       <input value={Email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email"/>
                                   </div>
                                   <div className="form-group">
                                       <label htmlFor="exampleInputPassword1">Password</label>
                                       <a href="#" className="float-right">Forgot password?</a>
                                       <input value={Password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password"/>
                                   </div>
                                   <div className="d-inline-block w-100">
                                       <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                           <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                               <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                       </div>
                                       <button onClick={handleSignUp} type="submit" className="btn btn-primary float-right">Sign in</button>
                                   </div>
                                   <div className="sign-info">
                                       <span className="dark-color d-inline-block line-height-2">Don't have an account? <a href="#">Sign up</a></span>
                                       <ul className="iq-social-media">
                                           <li><a href="#"><i className="ri-facebook-box-line"></i></a></li>
                                           <li><a href="#"><i className="ri-twitter-line"></i></a></li>
                                           <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                                       </ul>
                                   </div>
                               </form>
                           </div>
                       </div>

                       <div className="col-sm-6 text-center">
                           <div className="sign-in-detail text-white" style={{ background: "url('../assets/images/login/2.jpg') no-repeat 0 0", backgroundSize: "cover" }}>
                               <a className="sign-in-logo mb-2" href="#">
                                   <h1>DriveSalez Logo</h1>
                                   {/*<img src="assets/images/logo-white.png" class="img-fluid" alt="logo">*/}
                               </a>

                               <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                   <div className="item">
                                       <img src="../assets/images/login/audi.png" className="img-fluid mb-4" alt="logo"/>
                                           <h4 className="mb-1 text-white">Admin Sign-In</h4>
                                           <p>Welcome back! Access the admin dashboard to manage orders and ensure smooth operations.</p>
                                   </div>
                                   <div className="item mb-5 mt-5">
                                       <img src="../assets/images/login/merc.png" className="img-fluid mb-4" alt="logo"/>
                                           <h4 className="mb-1 text-white">Secure Access</h4>
                                           <p>Protect sensitive data. Sign in securely to maintain the confidentiality of information.</p>
                                   </div>
                                   <div className="item">
                                       <img src="../assets/images/login/bmw.png"  className="img-fluid" alt="logo"/>
                                           <h4 className="mb-1 text-white">DriveSalez Admin Panel</h4>
                                           <p>Explore the powerful admin features to streamline your automotive business processes.</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
    );
};


export default SignIn;
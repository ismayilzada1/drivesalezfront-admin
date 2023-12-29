import "./Topbar.css";
import Breadcrumb from "./Breadcrumb";
import {useDispatch, useSelector} from "react-redux";
import {logoutStaff} from "../../../Store/Auth/AuthActions";
import React from "react";
import Logo from "../Logo";
import SidebarDataAdmin from "../Sidebar/Data/SidebarDataAdmin";
import SidebarDataModerator from "../Sidebar/Data/SidebarDataModerator";

const Topbar = () => {

    const { admin,AdminAccessToken} = useSelector ((state) => state.auth);
    const dispatch = useDispatch ();

    let BreadCrumbData=null

    if(admin.Role==="Admin"){
        BreadCrumbData=SidebarDataAdmin
    }
    else if(admin.Role==="Moderator"){
        BreadCrumbData=SidebarDataModerator
    }
    else{
        return null;
    }

    const handleLogout = async() => {
        if(AdminAccessToken)
        {
            await dispatch(logoutStaff(AdminAccessToken)).then((resp)=>{
                console.log (resp);
            });
        }
        else{
            const token=sessionStorage.getItem('AdminAuthToken');
            if(token){
                await dispatch(logoutStaff(token));
            }
            else{
                console.log ("Something went wrong with tokens");
            }
        }

    };


    return (
        <>
            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <div className="iq-sidebar-logo">
                        <div className="top-logo">
                            <a href="index.html" className="logo">
                                <Logo/>
                                <span>DriveSalez</span>
                            </a>
                        </div>
                    </div>

                    <Breadcrumb  BreadCrumbData={BreadCrumbData}/>
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="ri-menu-3-line"></i>
                        </button>
                        <div className="iq-menu-bt align-self-center">
                            <div className="wrapper-menu">
                                <div className="line-menu half start"></div>
                                <div className="line-menu"></div>
                                <div className="line-menu half end"></div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item">
                                    <a className="search-toggle iq-waves-effect" href="#"><i className="ri-search-line"></i></a>
                                    <form action="#" className="search-box">
                                        <input type="text" className="text search-input" placeholder="Type here to search..." />
                                    </form>
                                </li>
                                {/*<li className="nav-item dropdown">*/}
                                {/*    <a href="#" className="search-toggle iq-waves-effect">*/}
                                {/*        <i className="ri-mail-line"></i>*/}
                                {/*        <span className="badge badge-pill badge-primary badge-up count-mail">3</span>*/}
                                {/*    </a>*/}
                                {/*    <div className="iq-sub-dropdown">*/}
                                {/*        <div className="iq-card shadow-none m-0">*/}
                                {/*            <div className="iq-card-body p-0 ">*/}
                                {/*                <div className="bg-primary p-3">*/}
                                {/*                    <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>*/}
                                {/*                </div>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/01.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Nik Emma Watson</h6>*/}
                                {/*                            <small className="float-left font-size-12">13 Jun</small>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/02.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>*/}
                                {/*                            <small className="float-left font-size-12">20 Apr</small>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/03.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Why do we use it?</h6>*/}
                                {/*                            <small className="float-left font-size-12">30 Jun</small>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/04.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Variations Passages</h6>*/}
                                {/*                            <small className="float-left font-size-12">12 Sep</small>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/05.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>*/}
                                {/*                            <small className="float-left font-size-12">5 Dec</small>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                {/*    <a href="#" className="iq-waves-effect"><i className="ri-shopping-cart-2-line"></i></a>*/}
                                {/*</li>*/}
                                {/*<li className="nav-item">*/}
                                {/*    <a href="#" className="search-toggle iq-waves-effect">*/}
                                {/*        <i className="ri-notification-2-line"></i>*/}
                                {/*        <span className="bg-danger dots"></span>*/}
                                {/*    </a>*/}
                                {/*    <div className="iq-sub-dropdown">*/}
                                {/*        <div className="iq-card shadow-none m-0">*/}
                                {/*            <div className="iq-card-body p-0 ">*/}
                                {/*                <div className="bg-danger p-3">*/}
                                {/*                    <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">4</small></h5>*/}
                                {/*                </div>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">New Order Recieved</h6>*/}
                                {/*                            <small className="float-right font-size-12">23 hrs ago</small>*/}
                                {/*                            <p className="mb-0">Lorem is simply</p>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/01.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Emma Watson Nik</h6>*/}
                                {/*                            <small className="float-right font-size-12">Just Now</small>*/}
                                {/*                            <p className="mb-0">95 MB</p>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/user/02.jpg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">New customer is join</h6>*/}
                                {/*                            <small className="float-right font-size-12">5 days ago</small>*/}
                                {/*                            <p className="mb-0">Jond Nik</p>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*                <a href="#" className="iq-sub-card" >*/}
                                {/*                    <div className="media align-items-center">*/}
                                {/*                        <div className="">*/}
                                {/*                            <img className="avatar-40 img-fluid" src="../assets/images/small/jpg.svg" alt=""/>*/}
                                {/*                        </div>*/}
                                {/*                        <div className="media-body ml-3">*/}
                                {/*                            <h6 className="mb-0 ">Updates Available</h6>*/}
                                {/*                            <small className="float-right font-size-12">Just Now</small>*/}
                                {/*                            <p className="mb-0">120 MB</p>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </a>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                <li className="nav-item iq-full-screen"><a href="#" className="iq-waves-effect" id="btnFullscreen"><i className="ri-fullscreen-line"></i></a></li>
                            </ul>
                        </div>
                        <ul className="navbar-list">
                            <li>
                                <a href="#" className="search-toggle iq-waves-effect bg-primary text-white"><img src="../assets/images/user/1.jpg" className="img-fluid" alt="user"/></a>
                                <div className="iq-sub-dropdown iq-user-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white line-height">Hello {admin?.email} </h5>
                                            </div>
                                            {/*<a href="profile.html" className="iq-sub-card iq-bg-primary-hover">*/}
                                            {/*    <div className="media align-items-center">*/}
                                            {/*        <div className=" iq-card-icon iq-bg-primary">*/}
                                            {/*            <i className="ri-file-user-line"></i>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="media-body ml-3">*/}
                                            {/*            <h6 className="mb-0 ">My Profile</h6>*/}
                                            {/*            <p className="mb-0 font-size-12">View personal profile details.</p>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</a>*/}
                                            {/*<a href="/moderator-edit-profile" className="iq-sub-card iq-bg-primary-success-hover">*/}
                                            {/*    <div className="media align-items-center">*/}
                                            {/*        <div className=" iq-card-icon iq-bg-success">*/}
                                            {/*            <i className="ri-profile-line"></i>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="media-body ml-3">*/}
                                            {/*            <h6 className="mb-0 ">Edit Profile</h6>*/}
                                            {/*            <p className="mb-0 font-size-12">Modify your personal details.</p>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</a>*/}
                                            {/*<a href="account-setting.html" className="iq-sub-card iq-bg-primary-danger-hover">*/}
                                            {/*    <div className="media align-items-center">*/}
                                            {/*        <div className=" iq-card-icon iq-bg-danger">*/}
                                            {/*            <i className="ri-account-box-line"></i>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="media-body ml-3">*/}
                                            {/*            <h6 className="mb-0 ">Account settings</h6>*/}
                                            {/*            <p className="mb-0 font-size-12">Manage your account parameters.</p>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</a>*/}
                                            {/*<a href="privacy-setting.html" className="iq-sub-card iq-bg-primary-secondary-hover">*/}
                                            {/*    <div className="media align-items-center">*/}
                                            {/*        <div className=" iq-card-icon iq-bg-secondary">*/}
                                            {/*            <i className="ri-lock-line"></i>*/}
                                            {/*        </div>*/}
                                            {/*        <div className="media-body ml-3">*/}
                                            {/*            <h6 className="mb-0 ">Privacy Settings</h6>*/}
                                            {/*            <p className="mb-0 font-size-12">Control your privacy parameters.</p>*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</a>*/}
                                            <div className="d-inline-block w-100 text-center p-3">
                                                <a className="iq-bg-danger iq-sign-btn" href={'/auth/sign-in'} onClick={handleLogout} role="button">Sign out<i className="ri-login-box-line ml-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};


export default Topbar;
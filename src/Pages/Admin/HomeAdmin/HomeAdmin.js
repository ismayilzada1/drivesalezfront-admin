import React,{useEffect} from "react";
import "./HomeAdmin.css";
import {useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";

const HomeAdmin = () => {
    return (
            <div className={'wrapper bg-admin'}>
                <div id="content-page" className="content-page">

                    {/*<div className="col-xl-3 col-md-6 mb-4">*/}
                    {/*    <div className="card custom-card border-left-primary shadow h-100 ">*/}
                    {/*        <div className="card-body">*/}
                    {/*            <div className="row no-gutters align-items-center">*/}
                    {/*                <div className="col mr-2">*/}
                    {/*                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">*/}
                    {/*                        Earnings (Monthly)*/}
                    {/*                    </div>*/}
                    {/*                    <div className="h5 mb-0 font-weight-bold text-gray-500">$40,000</div>*/}
                    {/*                </div>*/}
                    {/*                <div className="col-auto">*/}
                    {/*                    <i className="fas fa-calendar fa-2x text-gray-200"></i>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                </div>
            </div>
    );
};


export default HomeAdmin;
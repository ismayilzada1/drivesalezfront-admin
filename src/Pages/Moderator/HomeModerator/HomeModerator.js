import React from 'react';

const HomeModerator = () => {
    return (
        <div id="content-page" className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                            <div className="iq-card-body pb-0">
                                <div className="rounded-circle iq-card-icon iq-bg-primary"><i className="ri-exchange-dollar-fill"></i></div>
                                <span className="float-right line-height-6">Net Worth</span>
                                <div className="clearfix"></div>
                                <div className="text-center">
                                    <h2 className="mb-0"><span className="counter">65</span><span>M</span></h2>
                                    <p className="mb-0 text-secondary line-height"><i className="ri-arrow-up-line text-success mr-1"></i><span className="text-success">10%</span> Increased</p>
                                </div>
                            </div>
                            <div id="chart-1"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                            <div className="iq-card-body pb-0">
                                <div className="rounded-circle iq-card-icon iq-bg-warning"><i className="ri-bar-chart-grouped-line"></i></div>
                                <span className="float-right line-height-6">Todays Gains</span>
                                <div className="clearfix"></div>
                                <div className="text-center">
                                    <h2 className="mb-0"><span>$</span><span className="counter">4500</span></h2>
                                    <p className="mb-0 text-secondary line-height"><i className="ri-arrow-up-line text-success mr-1"></i><span className="text-success">20%</span> Increased</p>
                                </div>
                            </div>
                            <div id="chart-2"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                            <div className="iq-card-body pb-0">
                                <div className="rounded-circle iq-card-icon iq-bg-success"><i className="ri-group-line"></i></div>
                                <span className="float-right line-height-6">Total Users</span>
                                <div className="clearfix"></div>
                                <div className="text-center">
                                    <h2 className="mb-0"><span className="counter">96.6</span><span>K</span></h2>
                                    <p className="mb-0 text-secondary line-height"><i className="ri-arrow-up-line text-success mr-1"></i><span className="text-success">30%</span> Increased</p>
                                </div>
                            </div>
                            <div id="chart-3"></div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                            <div className="iq-card-body pb-0">
                                <div className="rounded-circle iq-card-icon iq-bg-danger"><i className="ri-shopping-cart-line"></i></div>
                                <span className="float-right line-height-6">Orders Received</span>
                                <div className="clearfix"></div>
                                <div className="text-center">
                                    <h2 className="mb-0"><span className="counter">15.5</span><span>K</span></h2>
                                    <p className="mb-0 text-secondary line-height"><i className="ri-arrow-down-line text-danger mr-1"></i><span className="text-danger">10%</span> Increased</p>
                                </div>
                            </div>
                            <div id="chart-4"></div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height overflow-hidden">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Monthly sales trend </h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link active">Latest</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">Month</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">All Time</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="d-flex justify-content-around">
                                    <div className="price-week-box mr-5">
                                        <span>Current Week</span>
                                        <h2>$<span className="counter">180</span> <i className="ri-funds-line text-success font-size-18"></i></h2>
                                    </div>
                                    <div className="price-week-box">
                                        <span>Previous Week</span>
                                        <h2>$<span className="counter">52.55</span><i className="ri-funds-line text-danger font-size-18"></i></h2>
                                    </div>
                                </div>
                            </div>
                            <div id="chart-5"></div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card iq-card-block iq-card-stretch iq-card-height animation-card">
                            <div className="iq-card-body p-0">
                                <div className="an-text">
                                    <span>Quarterly Target </span>
                                    <h2 className="display-4 font-weight-bold">$<span>2M</span></h2>
                                </div>
                                <div className="an-img">
                                    <div className="bodymovin" data-bm-path="images/small/data.json" data-bm-renderer="svg" data-bm-loop="true"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Top Grossing</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                 <span className="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown">
                                 <i className="ri-more-2-fill"></i>
                                 </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div className="media-sellers">
                                            <div className="media-sellers-img">
                                                <img src="images/page-img/01.jpg" className="mr-3 rounded" alt=""/>
                                            </div>
                                            <div className="media-sellers-media-info">
                                                <h5 className="mb-0"><a className="text-dark" href="#">Android Tablet</a></h5>
                                                <p className="mb-1">Android 10 supported tablet with best features.</p>
                                                <div className="sellers-dt">
                                                    <span className="font-size-12">Vendor: <a href="#"> iqonicdesign</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-center mt-3">
                                        <h5 className="mb-0">20,019</h5>
                                        <span>Sales</span>
                                    </div>
                                    <div className="col-sm-2 text-center mt-3">
                                        <ul className="list-inline mb-0 list-star">
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                        </ul>
                                        <span>Rating</span>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-8">
                                        <div className="media-sellers">
                                            <div className="media-sellers-img">
                                                <img src="images/page-img/02.jpg" className="mr-3 rounded" alt=""/>
                                            </div>
                                            <div className="media-sellers-media-info">
                                                <h5 className="mb-0"><a className="text-dark" href="#">Apple Watch</a></h5>
                                                <p className="mb-1">Latest model of apple watch for productivity.</p>
                                                <div className="sellers-dt">
                                                    <span className="font-size-12">Vendor: <a href="#">Apple</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-center mt-3">
                                        <h5 className="mb-0">56,112</h5>
                                        <span>Sales</span>
                                    </div>
                                    <div className="col-sm-2 text-center mt-3">
                                        <ul className="list-inline mb-0 list-star">
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                        </ul>
                                        <span>Rating</span>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-sm-8">
                                        <div className="media-sellers">
                                            <div className="media-sellers-img">
                                                <img src="images/page-img/03.jpg" className="mr-3 rounded" alt=""/>
                                            </div>
                                            <div className="media-sellers-media-info">
                                                <h5 className="mb-0"><a className="text-dark" href="#">I-Phone & I-Mac</a></h5>
                                                <p className="mb-1">Best ever combo package for work and personal use.</p>
                                                <div className="sellers-dt">
                                                    <span className="font-size-12">Vendor: <a href="#"> Iqonic devices</a></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 text-center mt-3">
                                        <h5 className="mb-0">9,895</h5>
                                        <span>Sales</span>
                                    </div>
                                    <div className="col-sm-2 text-center mt-3">
                                        <ul className="list-inline mb-0 list-star">
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                            <li className="list-inline-item text-warning"><i className="ri-star-fill"></i></li>
                                        </ul>
                                        <span>Rating</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Support Tickets</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                                <span className="dropdown-toggle dropdown-bg" id="dropdownMenuButton2" data-toggle="dropdown">View all</span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <div className="media-support">
                                            <div className="media-support-header mb-2">
                                                <div className="media-support-user-img mr-3">
                                                    <img className="rounded-circle" src="images/user/1.jpg" alt=""/>
                                                </div>
                                                <div className="media-support-info mt-2">
                                                    <h6 className="mb-0"><a href="#" className="">Nik Jordan</a></h6>
                                                    <small>2 day ago</small>
                                                </div>
                                                <div className="mt-3">
                                                    <span className="badge badge-success">Pending</span>
                                                </div>
                                            </div>
                                            <div className="media-support-body">
                                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                            </div>
                                        </div>
                                        {/*<hr className="mt-4 mb-4">*/}
                                            <div className="media-support">
                                                <div className="media-support-header mb-2">
                                                    <div className="media-support-user-img mr-3">
                                                        <img className="rounded-circle" src="images/user/02.jpg" alt=""/>
                                                    </div>
                                                    <div className="media-support-info mt-2">
                                                        <h6 className="mb-0"><a href="#" className="">Lily Wozniak</a></h6>
                                                        <small>2 day ago</small>
                                                    </div>
                                                    <div className="mt-3">
                                                        <span className="badge badge-warning text-white">Working</span>
                                                    </div>
                                                </div>
                                                <div className="media-support-body">
                                                    <p className="mb-0">It is a long established fact that a reader will be distracted by the readable layout.</p>
                                                </div>
                                            </div>
                                            {/*<hr className="mt-4 mb-4">*/}
                                                <div className="media-support">
                                                    <div className="media-support-header mb-2">
                                                        <div className="media-support-user-img mr-3">
                                                            <img className="rounded-circle" src="images/user/03.jpg" alt=""/>
                                                        </div>
                                                        <div className="media-support-info mt-2">
                                                            <h6 className="mb-0"><a href="#" className="">Samuel Path</a></h6>
                                                            <small>2 day ago</small>
                                                        </div>
                                                        <div className="mt-3">
                                                            <span className="badge badge-primary">Open</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-support-body">
                                                        <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                    </div>
                                                </div>
                                                {/*<hr className="mt-4 mb-4">*/}
                                                    <div className="media-support">
                                                        <div className="media-support-header mb-2">
                                                            <div className="media-support-user-img mr-3">
                                                                <img className="rounded-circle" src="images/user/04.jpg" alt=""/>
                                                            </div>
                                                            <div className="media-support-info mt-2">
                                                                <h6 className="mb-0"><a href="#" className="">Mia Mai</a></h6>
                                                                <small>2 day ago</small>
                                                            </div>
                                                            <div className="mt-3">
                                                                <span className="badge badge-danger">Closed</span>
                                                            </div>
                                                        </div>
                                                        <div className="media-support-body">
                                                            <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                        </div>
                                                    </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Cash flow</h4>
                                        </div>
                                        <div className="iq-card-header-toolbar d-flex align-items-center">
                                            <div className="dropdown">
                                       <span className="dropdown-toggle text-primary" id="dropdownMenuButton3" data-toggle="dropdown">
                                       <i className="ri-more-2-fill"></i>
                                       </span>
                                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                                    <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="bar-chart-6"></div>
                                </div>
                                <div className="iq-card">
                                    <div className="iq-card-body p-0">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col-lg-6">
                                                <div className="p-4">
                                                    <div className=" d-flex align-items-center">
                                                        <a href="#" className="iq-icon-box rounded-circle iq-bg-primary">
                                                            <i className="ri-facebook-fill"></i>
                                                        </a>
                                                        <h4 className="mb-0"><span className="counter">200</span>k<small className="d-block font-size-14">Posts</small></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div id="wave-chart-7"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card">
                                    <div className="iq-card-body p-0">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col-lg-6">
                                                <div className="p-4">
                                                    <div className=" d-flex align-items-center">
                                                        <a href="#" className="iq-icon-box rounded-circle iq-bg-success">
                                                            <i className="ri-twitter-fill"></i>
                                                        </a>
                                                        <h4 className="mb-0"><span className="counter">400</span>k<small className="d-block font-size-14">Tweets</small></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div id="wave-chart-8"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Activity timeline</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                 <span className="dropdown-toggle text-primary" id="dropdownMenuButton4" data-toggle="dropdown">
                                 View All
                                 </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <ul className="iq-timeline">
                                    <li>
                                        <div className="timeline-dots"></div>
                                        <h6 className="float-left mb-1">Client Login</h6>
                                        <small className="float-right mt-1">24 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-success"></div>
                                        <h6 className="float-left mb-1">Scheduled Maintenance</h6>
                                        <small className="float-right mt-1">23 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-danger"></div>
                                        <h6 className="float-left mb-1">Dev Meetup</h6>
                                        <small className="float-right mt-1">20 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans <a href="#">gummi bears</a>gummi bears jelly lollipop apple</p>
                                            <div className="iq-media-group">
                                                <a href="#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle" src="images/user/05.jpg" alt=""/>
                                                </a>
                                                <a href="#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle" src="images/user/06.jpg" alt=""/>
                                                </a>
                                                <a href="#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle" src="images/user/07.jpg" alt=""/>
                                                </a>
                                                <a href="#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle" src="images/user/08.jpg" alt=""/>
                                                </a>
                                                <a href="#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle" src="images/user/09.jpg" alt=""/>
                                                </a>
                                                <a href="#" className="iq-media">
                                                    <img className="img-fluid avatar-40 rounded-circle" src="images/user/10.jpg" alt=""/>
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-primary"></div>
                                        <h6 className="float-left mb-1">Client Call</h6>
                                        <small className="float-right mt-1">19 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="timeline-dots border-warning"></div>
                                        <h6 className="float-left mb-1">Mega event</h6>
                                        <small className="float-right mt-1">15 November 2019</small>
                                        <div className="d-inline-block w-100">
                                            <p>Bonbon macaroon jelly beans gummi bears jelly lollipop apple</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="iq-card">
                            <img src="images/small/img-1.jpg" className="img-fluid w-100 rounded" alt="#"/>
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">How to setup E-store</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <div className="dropdown">
                                 <span className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown">
                                 <i className="ri-settings-5-fill"></i>
                                 </span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                                <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <span className="font-size-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    <small className="text-muted mt-3 d-inline-block w-100">Saturday, 7 December 2019</small>
                                </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Order Summary</h4>
                                </div>
                                <div className="iq-card-header-toolbar d-flex align-items-center">
                                    <div className="dropdown">
                                 <span className="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                                 <i className="ri-more-2-fill"></i>
                                 </span>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="table-responsive">
                                    <table className="table mb-0 table-borderless">
                                        <thead>
                                        <tr>
                                            <th scope="col">Package No.</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Delivery</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Progress</th>

                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>#0879985</td>
                                            <td>26/12/2019</td>
                                            <td>30/12/2019</td>
                                            <td>
                                                <div className="badge badge-pill badge-success">Moving</div>
                                            </td>
                                            <td>Victoria 8007 Australia</td>
                                            <td>
                                                <div className="iq-progress-bar">
                                                    <span className="bg-success" data-percent="90"></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0879984</td>
                                            <td>23/12/2019</td>
                                            <td>27/12/2019</td>
                                            <td>
                                                <div className="badge badge-pill badge-warning text-white">Pending</div>
                                            </td>
                                            <td>Athens 2745 Greece</td>
                                            <td>
                                                <div className="iq-progress-bar">
                                                    <span className="bg-warning" data-percent="70"></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0879983</td>
                                            <td>18/12/2019</td>
                                            <td>21/12/2019</td>
                                            <td>
                                                <div className="badge badge-pill badge-danger">Canceled</div>
                                            </td>
                                            <td>Victoria 8007 Australia</td>
                                            <td>
                                                <div className="iq-progress-bar">
                                                    <span className="bg-danger" data-percent="48"></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0879982</td>
                                            <td>14/12/2019</td>
                                            <td>20/12/2019</td>
                                            <td>
                                                <div className="badge badge-pill badge-info">Working</div>
                                            </td>
                                            <td>Delhi 0014 India</td>
                                            <td>
                                                <div className="iq-progress-bar">
                                                    <span className="bg-info" data-percent="90"></span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#0879981</td>
                                            <td>10/12/2019</td>
                                            <td>18/12/2019</td>
                                            <td>
                                                <div className="badge badge-pill badge-success">Moving</div>
                                            </td>
                                            <td>Alabama 2741 USA</td>
                                            <td>
                                                <div className="iq-progress-bar">
                                                    <span className="bg-success" data-percent="45"></span>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeModerator;
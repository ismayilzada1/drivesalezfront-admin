import "./Sidebar.css";
const Sidebar = () => {
    return (
        <>
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <a href="/dashboard">
                        <img src="../assets/images/logo.png" className="img-fluid" alt=""/>
                        <span>DriveSalez</span>
                    </a>
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="line-menu half start"></div>
                            <div className="line-menu"></div>
                            <div className="line-menu half end"></div>
                        </div>
                    </div>
                </div>
                <div id="sidebar-scrollbar">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            <li className="iq-menu-title">
                                <i className="ri-separator"></i>
                                <span>Main</span>
                            </li>




                            <li className="active">
                                <a href="/dashboard" className="iq-waves-effect">
                                    <i className="ri-home-4-line"></i>
                                    <span>Home</span>
                                </a>
                            </li>

                            <li>
                                <a href="#addNew" className="iq-waves-effect collapsed"  data-toggle="collapse" aria-expanded="false">
                                    <i className="ri-add-line"></i>
                                    <span>Add New</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                </a>
                                <ul id="addNew" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li><a href="/add-vehicle-make">Vehicle Make</a></li>
                                    <li><a href="/add-vehicle-model">Vehicle Model</a></li>
                                    <li><a href="/add-vehicle-bodytype">Vehicle Body Type</a></li>
                                    <li><a href="/add-vehicle-drivetrain-type">Vehicle DriveTrain Type</a></li>
                                    <li><a href="/add-vehicle-gearbox-type">Vehicle Gearbox Type</a></li>
                                    <li><a href="/add-vehicle-fuel-type">Vehicle Fuel Type</a></li>
                                    <li><a href="/add-vehicle-market-version">Vehicle Market Version</a></li>
                                    <li><a href="/add-vehicle-option">Vehicle Option</a></li>
                                    <li><a href="/add-vehicle-condition">Vehicle Condition</a></li>
                                    <li><a href="/add-vehicle-manufacture-year">Vehicle Manufacture Year</a></li>
                                    <li><a href="/add-vehicle-color">Vehicle Color</a></li>
                                    <li><a href="/add-country">Country</a></li>
                                    <li><a href="/add-city">City</a></li>
                                    <li><a href="/add-subscription">Subscription</a></li>
                                    <li><a href="/add-currency">Currency</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#remove" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="ri-subtract-line"></i>
                                    <span>Remove</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                </a>
                                <ul id="remove" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li><a href="/remove-vehicle-make"> Vehicle Make</a></li>
                                    <li><a href="/remove-vehicle-model"> Vehicle Model</a></li>
                                    <li><a href="/remove-vehicle-bodytype"> Vehicle Body Type</a></li>
                                    <li><a href="/remove-vehicle-drivetrain-type"> Vehicle DriveTrain Type</a></li>
                                    <li><a href="/remove-vehicle-gearbox-type"> Vehicle Gearbox Type</a></li>
                                    <li><a href="/remove-vehicle-fuel-type"> Vehicle Fuel Type</a></li>
                                    <li><a href="/remove-vehicle-market-version"> Vehicle Market Version</a></li>
                                    <li><a href="/remove-vehicle-option"> Vehicle Option</a></li>
                                    <li><a href="/remove-vehicle-condition"> Vehicle Condition</a></li>
                                    <li><a href="/remove-vehicle-manufacture-year"> Vehicle Manufacture Year</a></li>
                                    <li><a href="/remove-vehicle-color"> Vehicle Color</a></li>
                                    <li><a href="/remove-country"> Country</a></li>
                                    <li><a href="/remove-city"> City</a></li>
                                    <li><a href="/remove-subscription"> Subscription</a></li>
                                    <li><a href="/remove-currency"> Currency</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="#update" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false">
                                    <i className="ri-edit-line"></i>
                                    <span>Update</span>
                                    <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                </a>
                                <ul id="update" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                    <li className="update"><a href="index.html">Vehicle Make</a></li>
                                    <li><a href="/remove-model">Vehicle Model</a></li>
                                    <li><a href="/remove-model">Vehicle Body Type</a></li>
                                    <li><a href="/remove-model">Vehicle DriveTrain Type</a></li>
                                    <li><a href="/remove-model">Vehicle Gearbox Type</a></li>
                                    <li><a href="/remove-model">Vehicle Market Version</a></li>
                                    <li><a href="/remove-model">Vehicle Option</a></li>
                                    <li><a href="/remove-model">Vehicle Condition</a></li>
                                    <li><a href="/remove-model">Vehicle Manufacture Year</a></li>
                                    <li><a href="dashboard1.html">Vehicle Color</a></li>
                                    <li><a href="/remove-model">Country</a></li>
                                    <li><a href="/remove-model">City</a></li>
                                </ul>
                            </li>





                        </ul>
                    </nav>
                    <div className="p-3"></div>
                </div>
            </div>
        </>
    );
};


export default Sidebar;
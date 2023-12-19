import "./Sidebar.css";
import {NavLink, useLocation} from "react-router-dom";
import sidebarDataAdmin from "./Data/SidebarDataAdmin";
import sidebarDataModerator from "./Data/SidebarDataModerator";
import {useSelector} from "react-redux";
import Logo from "../Logo";

const Sidebar = () => {

    const location = useLocation ();


    const isLoggedIn = useSelector ((state) => state.auth.isLoggedIn);
    const admin = useSelector ((state) => state.auth.admin);
    const isAdmin = admin?.userRole === "Admin";

    if (!isLoggedIn) {
        return null;
    }


    return (
        <>
            <div className="iq-sidebar">
                <div className="iq-sidebar-logo d-flex justify-content-between">
                    <a href="/dashboard">
                        <Logo/>

                        <span style={{fontSize: "1.5em"}}>DriveSalez</span>
                    </a>
                    <div className="iq-menu-bt align-self-center">
                        <div className="wrapper-menu">
                            <div className="line-menu half start"></div>
                            <div className="line-menu"></div>
                            <div className="line-menu half end"></div>
                        </div>
                    </div>
                </div>

                {isAdmin ? (
                    <div id="sidebar-scrollbar">
                        <nav className="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" className="iq-menu">

                                {sidebarDataAdmin.map ((item, index) => (
                                    <li
                                        key={index}
                                        className={item.submenu
                                            ? location.pathname.startsWith (item.startsWith) ? 'active' : ''
                                            : location.pathname === item.path ? 'active' : ''}
                                    >
                                        {item.submenu ? (
                                            <a
                                                href={item.path}
                                                className="iq-waves-effect collapsed"
                                                data-toggle="collapse"
                                                aria-expanded="false"
                                            >
                                                <i className={item.icon}></i>
                                                <span>{item.title}</span>
                                                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                            </a>
                                        ) : (
                                            <NavLink to={item.path} className="iq-waves-effect">
                                                <i className={item.icon}></i>
                                                <span>{item.title}</span>
                                            </NavLink>
                                        )}

                                        {item.submenu && (
                                            <ul
                                                id={item.title.toLowerCase ().replace (' ', '-')}
                                                className={`iq-submenu collapse`}
                                                data-parent="#iq-sidebar-toggle"
                                            >
                                                {item.submenu.map ((subitem, subindex) => (
                                                    <li
                                                        key={subindex}
                                                        className={location.pathname === subitem.path ? 'active' : ''}
                                                    >
                                                        <NavLink to={subitem.path}>{subitem.title}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}

                            </ul>
                        </nav>
                        <div className="p-3"></div>
                    </div>
                ) : (
                    <div id="sidebar-scrollbar">
                        <nav className="iq-sidebar-menu">
                            <ul id="iq-sidebar-toggle" className="iq-menu">

                                {sidebarDataModerator.map ((item, index) => (
                                    <li
                                        key={index}
                                        className={item.submenu
                                            ? location.pathname.startsWith (item.startsWith) ? 'active' : ''
                                            : location.pathname === item.path ? 'active' : ''}
                                    >
                                        {item.submenu ? (
                                            <a
                                                href={item.path}
                                                className="iq-waves-effect collapsed"
                                                data-toggle="collapse"
                                                aria-expanded="false"
                                            >
                                                <i className={item.icon}></i>
                                                <span>{item.title}</span>
                                                <i className="ri-arrow-right-s-line iq-arrow-right"></i>
                                            </a>
                                        ) : (
                                            <NavLink to={item.path} className="iq-waves-effect">
                                                <i className={item.icon}></i>
                                                <span>{item.title}</span>
                                            </NavLink>
                                        )}

                                        {item.submenu && (
                                            <ul
                                                id={item.title.toLowerCase ().replace (' ', '-')}
                                                className={`iq-submenu collapse`}
                                                data-parent="#iq-sidebar-toggle"
                                            >
                                                {item.submenu.map ((subitem, subindex) => (
                                                    <li
                                                        key={subindex}
                                                        className={location.pathname === subitem.path ? 'active' : ''}
                                                    >
                                                        <NavLink to={subitem.path}>{subitem.title}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}

                            </ul>
                        </nav>
                        <div className="p-3"></div>
                    </div>
                )}
            </div>
        </>
    );
};


export default Sidebar;